const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.textContent = document.lastModified;