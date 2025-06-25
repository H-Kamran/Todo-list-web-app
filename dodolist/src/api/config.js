const BASE_URL = "http://localhost:3001";

export const API_ENDPOINTS = {
  tasks: `${BASE_URL}/tasks`,
  taskById: (id) => `${BASE_URL}/tasks/${id}`,
  users: `${BASE_URL}/users`,
  projects: `${BASE_URL}/projects`,
  labels: `${BASE_URL}/labels`,
};