import axios from "axios";

// const usersUrl = 'http://localhost:3003/users';
const dataUrl = "http://localhost:8080";

export const getData = async (id) => {
  return await axios.get(`${dataUrl}`);
};

export const getDat = async (id) => {
  try {
    return await axios.get(`${dataUrl}/${id}`);
  } catch (error) {
    console.log("error");
  }
};

export const adddata = async (data) => {
  return await axios.post(`${dataUrl}/add`, data);
};

export const deleteData = async (id) => {
  return await axios.delete(`${dataUrl}/${id}`);
};

export const editdata = async (data, id) => {
  try {
    return await axios.put(`${dataUrl}/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
