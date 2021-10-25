import axios from "axios";
const API_PERSONS = "/api/persons";

const getAll = () => {
  return axios.get(API_PERSONS);
};

const create = (newObject) => {
  return axios.post(API_PERSONS, newObject);
};

const remove = (id) => {
  return axios.delete(`${API_PERSONS}/${id}`);
};

const update = (id, newObject) => {
  return axios.put(`${API_PERSONS}/${id}`, newObject);
};

const services = { getAll, create, remove, update };

export default services;
