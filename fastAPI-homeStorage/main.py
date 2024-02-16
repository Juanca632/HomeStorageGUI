from typing import List
from fastapi import FastAPI, status
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from database import data_list
from database import soc



app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Chart(BaseModel):
    hour: str = Field(..., description="The date of the chart")
    power: float = Field(...)



@app.get(
    path="/soc",
    # response_model=List[Chart],
    status_code=status.HTTP_200_OK,
    summary="Show the SOC",
    tags=["SOC"]
)
def home():
    return soc

@app.get(
    path="/charts",
    # response_model=List[Chart],
    status_code=status.HTTP_200_OK,
    summary="Show all charts",
    tags=["Charts"]
)
def charts():
    return data_list