import axios from "axios"

const url = "https://todobe-x7ru.onrender.com/api"

export const viewToDos = async() => {
    return await axios.get(`${url}/all-todo`).then((res) => {
        return res.data.data
    })
}