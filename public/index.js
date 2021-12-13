const message = document.querySelector(`#message`);

function addDest(e) {
  e.preventDefault();
  const inputField = document.querySelector(`input`);
  const dest = document.createElement(`li`);
  const destTitle = document.createElement(`span`);
  destTitle.textContent = inputField.value;
  destTitle.addEventListener(`click`, crossOffDest);
  dest.appendChild(destTitle);
  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = `X`;
  deleteBtn.addEventListener(`click`, deleteDest);
  dest.appendChild(deleteBtn);
  document.querySelector(`ul`).appendChild(dest);
  inputField.value = ``;
}

document.querySelector(`form`).addEventListener(`submit`, addDest);

function deleteDest(e) {
  e.target.parentNode.remove();
  message.textContent = `${e.target.parentNode.firstChild.textContent} deleted!`;
  revealMessage();
}

function crossOffDest(e) {
  e.target.classList.toggle(`checked`);
  if (e.target.classList.contains(`checked`)) {
    message.textContent = `${e.target.textContent} visited!`;
  } else {
    message.textContent = `${e.target.textContent} added back!`;
  }
  revealMessage();
}

function revealMessage() {
  message.classList.remove(`hide`);
  setTimeout(() => {
    message.classList.add(`hide`);
  }, 3000);
}

//

const recomBtn = document.querySelector(`#recBtn`);

let amnh = `Arizona Museum of Natural History`;
let amnhUrl = `https://www.arizonamuseumofnaturalhistory.org/`;

let ggtm = `Goldfield Ghost Town and Mine`;
let ggtmUrl = `http://goldfieldghosttown.com/`;

let msrp = `McCormick-Stillman Railroad Park`;
let msrpUrl = `https://www.therailroadpark.com/`;

let oa = `Odysea Aquarium`;
let oaUrl = `https://www.odyseaaquarium.com/`;

let recLocArr = [
  `Learn things about dinosaurs at ${amnh.link(amnhUrl)} in Mesa!`,
  `We really recommend you to go to ${ggtm.link(ggtmUrl)} in Apache Junction!`,
  `${msrp.link(msrpUrl)} in Scottsdale is a must go place!`,
  `See some sharks and stingrays at ${oa.link(oaUrl)} in Scottsdale!`,
];

function recLoc() {
  let randomLoc = Math.floor(Math.random() * recLocArr.length);
  document.getElementById(`pRecLoc`).innerHTML = recLocArr[randomLoc];
}

recomBtn.addEventListener(`click`, recLoc);
