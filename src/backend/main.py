""" Главный файл проекта 
    Запускает API
"""

import uvicorn

from api import fastapi_app as asgi_app

if __name__ == "__main__":
    uvicorn.run(asgi_app, host="0.0.0.0", port=8000)
