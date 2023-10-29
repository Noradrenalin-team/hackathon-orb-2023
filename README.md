# Профтестиум.рф

## Описание проекта

"ПрофТестиум" - инновационный проект, направленный на разработку единой платформы для обучения и тестирования сотрудников рабочих профессий. Наша цель - предоставить предприятиям инструменты для создания собственных порталов, наполненных обучающими материалами и интегрированными VR-технологиями. Этот репозиторий содержит исходный код веб-приложения "ПрофТестиум", а также дополнительные ресурсы и документацию. Присоединяйтесь к нашему проекту и вместе с нами создавайте будущее образования и обучения в сфере рабочих профессий.

## Структура репозитория

- `docs` - документация проекта
- `src` - исходный код проекта
  - `backend` - исходный код backend части проекта
  - `frontend` - исходный код frontend части проекта

## Техническое задание

[Техническое задание](docs/tz.md)

### Стек технологий

- Python 3.12
- Django 4.0.1

## Команда проекта

- [@DeveloperDmitryKolyadin](https://github.com/DeveloperDmitryKolyadin) - Team Lead, Backend Developer
- [@MrBallonvas](https://github.com/MrBallonvas) - Frontend Developer

# Развёртывание проекта

## Установка

- Установить [Python](https://www.python.org/downloads/)

- Установка пакетов

```
git clone https://github.com/Noradrenalin-team/hackathon-orb-2023.git
cd hackathon-orb-2023

python3 -m pip install -r requirements.txt
```

- Применение миграций

```
python3 src/manage.py makemigrations
python3 src/manage.py migrate
```

- Проверка что работает
```python3 src/manage.py runserver```

### Запуск фронтенда

- Установить [Node.js](https://nodejs.org/en/download/)
- Установить зависимости
```
cd src/frontend
npm install
```
- Запустить
```
npm run dev
```


## Настройка

- Создаём админа
```python3 src/manage.py createsuperuser```
- Админка доступна на странице <http://l.профтестиум.рф:8000/admin/>
