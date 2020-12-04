const API_URL = "https://my.api.mockaroo.com/employees.json?key=6d5dc7d0";
const fetchEmployeesData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchEmployeesData };
