from fastapi import FastAPI

app = FastAPI(title = "My FastAPI App")

users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@gmail.com"
    },
    {
        "id": 2,
        "name": "Salem Blair",
        "email": "salemblair@gmail.com"
    }
]

@app.get("/")
def home():
    return {"message": "Hello world!"}

@app.get("/users/{user_id}")
def find_user_by_id(user_id: int):
    for user in users:
        if user["id"] == user_id:
            return user