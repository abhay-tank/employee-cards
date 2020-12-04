const createEmployeeMarkup = (employee) => {
  let gridCard = document.createElement("div");
  gridCard.setAttribute("class", "grid-card card");
  let userName = document.createElement("h2");
  userName.innerHTML = `${employee.firstName} ${employee.lastName}`;
  let userEmail = document.createElement("a");
  userEmail.href = `mailto:${employee.email}`;
  userEmail.innerHTML = employee.email;
  let userWebsite = document.createElement("a");
  userWebsite.href = employee.website;
  userWebsite.target = "_blank";
  userWebsite.innerHTML = employee.website;
  let userImg = document.createElement("img");
  userImg.src = employee.imageURL;
  gridCard.appendChild(userImg);
  gridCard.appendChild(userName);
  gridCard.appendChild(userEmail);
  gridCard.appendChild(userWebsite);
  return gridCard;
};

export { createEmployeeMarkup };
