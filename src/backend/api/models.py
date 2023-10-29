from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.mail import send_mail
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import UserManager


class Role(models.Model):
    """Роль пользователя
    Атрибуты:
    id - id роли (int) (PK)
    name - название роли (str) (unique)
    description - описание роли (str)
    """

    name = models.CharField(_("name"), max_length=30, unique=True)
    description = models.CharField(_("description"), max_length=255, blank=True)

    class Meta:
        app_label = "accounts"
        verbose_name = _("role")
        verbose_name_plural = _("roles")

    def __str__(self):
        """Возвращает строковое представление роли"""
        return str(self.name)


class User(AbstractBaseUser, PermissionsMixin):
    """Пользователь
    Переопределенная модель пользователя.
    Атрибуты:
    id - id пользователя (int) (PK)
    email - email пользователя (str) (unique)

    first_name - имя пользователя (str)
    last_name - фамилия пользователя (str)
    second_name - отчество пользователя (str)

    display_name - отображаемое имя пользователя (str)

    sex - пол пользователя (choices)
    birthday - дата рождения пользователя (date)
    phone - телефон пользователя (str)
    avatar - аватар пользователя (img)

    is_staff - является ли пользователь сотрудником (bool)
    is_active - активен ли пользователь (bool)
    date_joined - дата регистрации (datetime)

    roles - роли пользователя (FK)


    """

    email = models.EmailField(_("email address"), unique=True)

    first_name = models.CharField(_("first name"), max_length=30, blank=True)
    last_name = models.CharField(_("last name"), max_length=30, blank=True)
    second_name = models.CharField(_("second name"), max_length=30, blank=True)
    display_name = models.CharField(_("display name"), max_length=30, blank=True)

    MALE = "M"
    FEMALE = "F"
    SEX_CHOICES = ((MALE, "Male"), (FEMALE, "Female"))

    sex = models.CharField(_("sex"), max_length=1, choices=SEX_CHOICES, blank=True)

    birthday = models.DateField(_("birthday"), blank=True, null=True)
    phone = models.CharField(_("phone"), max_length=20, blank=True)
    avatar = models.ImageField(_("avatar"), upload_to="avatars/", blank=True)


    is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_("Designates whether the user can log into this admin site."),
    )
    is_active = models.BooleanField(
        _("active"), default=True, help_text=_("Активен ли аккаунт")
    )
    is_superuser = models.BooleanField(
        _("is_superuser"), default=False, help_text=_("1234")
    )
    is_done = models.BooleanField(
        _("is_done"),
        default=False,
        help_text=_("Заполнены ли все поля при регистрации"),
    )
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)


    USERNAME_FIELD = "email"
    # REQUIRED_FIELDS = ["role"]

    objects = UserManager()

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def get_full_name(self):
        """Возвращает полное имя пользователя"""
        full_name = f"{self.first_name} {self.last_name} {self.second_name}"
        return full_name.strip()

    def get_short_name(self):
        """Возвращает краткое имя пользователя"""
        return self.first_name or self.email

    def get_username(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    def __str__(self):
        """Возвращает строковое представление пользователя"""
        return str(self.email)


class Organization(models.Model):
    """Организация
    Атрибуты:
    id - id организации (int) (PK)
    name - название организации (str) (unique)
    inn - ИНН организации (str) (unique)
    address - адрес организации (str)

    """

    name = models.CharField(_("name"), max_length=255, unique=True)
    inn = models.CharField(_("inn"), max_length=12, unique=True)
    address = models.CharField(_("address"), max_length=255, blank=True)

    class Meta:
        verbose_name = _("organization")
        verbose_name_plural = _("organizations")

    def __str__(self):
        """Возвращает строковое представление организации"""
        return str(self.name)
    

class Profile(models.Model):
    """Профиль пользователя
    Атрибуты:
    id - id профиля (int) (PK)
    user - пользователь (FK)
    organization - организация (FK)
    chif_id - id руководителя (int) (FK)
    manager_id - id менеджера (int) (FK)
    position - должность (str)
    active - активен ли профиль (bool)
    role - роль (str) (choices)


    """



    user = models.ForeignKey(
        User, verbose_name=_("user"), on_delete=models.CASCADE
    )
    organization = models.ForeignKey(
        Organization,
        verbose_name=_("organization"),
        on_delete=models.CASCADE
    )

    chif_id = models.ForeignKey(
        "Profile",
        verbose_name=_("chif"),
        on_delete=models.CASCADE,
        related_name="Подчиненные",
        blank=True,
        null=True,
    )


    manager_id = models.ForeignKey(
        "Profile",
        verbose_name=_("manager"),
        on_delete=models.CASCADE,
        related_name="Менеджер",
        blank=True,
        null=True,
    )

    position = models.CharField(_("position"), max_length=255, blank=True)

    active = models.BooleanField(_("active"), default=True)

    ROLE_CHOICES = (
        ("admin", "Администратор"),
        ("manager", "Менеджер"),
        ("employee", "Сотрудник"),
    )

    role = models.CharField(_("role"), max_length=20, choices=ROLE_CHOICES)


    class Meta:
        verbose_name = _("profile")
        verbose_name_plural = _("profiles")

    def __str__(self):
        """Возвращает строковое представление профиля"""
        return str(self.user)
    

class Domain(models.Model):
    """Домен
    Атрибуты:
    id - id домена (int) (PK)
    url - url домена (str) (unique)
    organization - организация (FK)
    """

    url = models.CharField(_("url"), max_length=255, unique=True)
    organization = models.ForeignKey(
        Organization,
        verbose_name=_("organization"),
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = _("domain")
        verbose_name_plural = _("domains")

    def __str__(self):
        """Возвращает строковое представление домена"""
        return str(self.url)

