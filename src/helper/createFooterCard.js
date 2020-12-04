const createCompanyCard = () => {
  let gridCard = document.createElement("div");
  gridCard.classList.add("grid-card", "card", "footer-card");
  let companyName = document.createElement("h2");
  companyName.innerHTML = "Raw Engineering";
  let companyImage = document.createElement("img");
  companyImage.src = "./images/logo.jpeg";
  let companyURL = document.createElement("a");
  companyURL.href = "https://www.raweng.com/";
  companyURL.innerHTML = "raweng.com";
  let copyRight = document.createElement("h3");
  copyRight.classList.add("copyright");
  copyRight.innerHTML =
    "Copyright © 2020 Raw Engineering LLC. All Rights Reserved.";
  gridCard.appendChild(companyImage);
  gridCard.appendChild(companyName);
  gridCard.appendChild(companyURL);
  gridCard.appendChild(copyRight);
  return gridCard;
};

export { createCompanyCard };
