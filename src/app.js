import { fetchEmployeesData } from "./services/fetchEmployeesData.js";
import { createEmployeeMarkup } from "./helper/createEmployeeCard.js";
import { createCompanyCard } from "./helper/createFooterCard.js";
let employeeData;
window.onload = () => {
  const parentContainer = document.getElementById("employeeDataContainer");
  employeeData = fetchEmployeesData();
  employeeData
    .then((employees) => {
      employees.forEach((employee) => {
        parentContainer.appendChild(createEmployeeMarkup(employee));
      });
      parentContainer.appendChild(createCompanyCard());
      document.getElementById("loadingDiv").style.display = "none";
    })
    .catch((err) => {
      throw new Error(err);
    });
};
