const url = "https://autoswift-backend.onrender.com/api/v1/cars" 
const userUrl = "https://autoswift-backend.onrender.com/api/v1/users"


const container = document.querySelector("#car-container")
const createCarForm = document.querySelector('#create-car-form')
const userSelectDom = document.querySelector('#users-select')
const editButton = document.querySelector('#edit-btn')


createCarForm.addEventListener('submit', (event) => Car.createCarHandler(event))



UserApi.getUsersReq()

CarApi.getCarsReq()

Car.sortPrice()


