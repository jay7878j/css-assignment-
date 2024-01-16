let listContainer = document.querySelector("#listContainer");
const weightLoss = [
  {
    id: 1,
    logo: "./logos/menu (2) 1.png",
    title: "Calorie Controlled",
    info: "Each low carb Weight Loss meal has less than 400 cals per serve.",
  },
  {
    id: 2,
    logo: "./logos/diet 1.png",
    title: "Balanced Nutrition",
    info: "Dietitian-designed, our Weight Loss meals give your body what it needs to stay healthy, all while keeping you satisfied.",
  },
  {
    id: 3,
    logo: "./logos/chef-hat 1.png",
    title: "All the Flavour",
    info: "Our chefs know how to make calorie-controlled dishes taste awesome.",
  },
  {
    id: 4,
    logo: "./logos/fruit 1.png",
    title: "Variety",
    info: "We add a new meal to the menu every week to keep things interesting, and you on track.",
  },
];

function renderContents() {
  weightLoss.forEach((each) => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listContainer.appendChild(listItem);

    let logoImgEl = document.createElement("img");
    logoImgEl.src = each.logo;
    logoImgEl.alt = each.title;
    listItem.appendChild(logoImgEl);

    let textContentContainer = document.createElement("div");
    listItem.appendChild(textContentContainer);

    let titleEl = document.createElement("h1");
    titleEl.textContent = each.title;
    titleEl.classList.add("title");
    textContentContainer.appendChild(titleEl);

    let infoEl = document.createElement("p");
    infoEl.textContent = each.info;
    infoEl.classList.add("info-text");
    textContentContainer.appendChild(infoEl);
  });
}

renderContents();
