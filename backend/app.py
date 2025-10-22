from fastapi import FastAPI

app = FastAPI(title="LOPES EROES Feelback API")

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI backend 👋"}
