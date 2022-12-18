import axios from "axios"

const URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

export const getDragonsList = async () => {
  const { data } = await axios.get(URL)
  return data
}

export const deleteDragon = async (id) => {
  await axios.delete(`${URL}/${id}`)
}

export const getThisDragon = async (id) => {
  const { data } = await axios.get(`${URL}/${id}`)
  return data
}

export const newDragon = async (data) => {
  await axios.post(URL, data)
}

export const editDragon = async (id, data) => {
  await axios.put(`${URL}/${id}`, data)
}
