from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _

from .models import Domain, Organization, Profile, User


class UserAdmin_(UserAdmin):


    fieldsets = (
        (None, {"fields": ("email", "password", "avatar", "phone", "birthday")}),
        (_("Personal info"), {"fields": ("first_name", "last_name", "second_name")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )

    list_display = ("email", "first_name", "last_name", "is_staff")
    list_filter = ("is_staff", "is_superuser", "is_active", "groups")
    search_fields = ("email", "first_name", "last_name")
    ordering = ("email",)


class DomainInline(admin.TabularInline):
    model = Domain
    extra = 1


class ProfileInline(admin.TabularInline):
    model = Profile
    extra = 1

class OrganizationAdmin(ModelAdmin):

    inlines = [
        DomainInline,
        ProfileInline,
    ]

    fieldsets = (
        (None, {"fields": ("name", "inn", "address",)}),
    )

    list_display = ("name", "inn")
    


admin.site.register(Organization, OrganizationAdmin)
admin.site.register(Profile)
admin.site.register(Domain)
