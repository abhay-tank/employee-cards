let api = "https://jsonplaceholder.typicode.com/users";

window.onload = () => {
  // Fetch data parallel with loading page
  fetchEmployees();
  console.log("Hello World");
};

fetchEmployees = async () => {
  try {
    await fetch(api)
      .then((respone) => {
        return respone.json();
      })
      .then((users) => {
        let parentContainer = document.getElementById("employeeDataContainer");
        users.forEach((user) => {
          console.log(user);
          let gridItem = document.createElement("div");
          gridItem.setAttribute("class", "grid-item");
          let userCard = document.createElement("div");
          userCard.setAttribute("class", "card");
          let userName = document.createElement("h2");
          userName.innerHTML = user.name;
          let userEmail = document.createElement("a");
          userEmail.setAttribute("href", `mailto:${user.email}`);
          userEmail.innerHTML = user.email;
          let userWebsite = document.createElement("a");
          userWebsite.setAttribute("href", `${user.website}`);
          userWebsite.setAttribute("target", "_blank");
          userWebsite.innerHTML = user.website;
          let userImg = document.createElement("img");
          userImg.setAttribute("src", "https://picsum.photos/1000");
          userCard.appendChild(userImg);
          userCard.appendChild(userName);
          userCard.appendChild(userEmail);
          userCard.appendChild(userWebsite);
          gridItem.appendChild(userCard);
          parentContainer.appendChild(gridItem);
        });
      });
  } catch (error) {
    throw new Error("Error in API call", error);
  }
};

// fetchEmployees = async () => {
//   response = await fetch(api);
//   data = await response.json();
//   console.log(data);
// };
