const base_url = "https://api.exchangerate.host";

const dropdown = document.querySelectorAll("select");
const btn = document.querySelector("#button");
const fromcurr = document.querySelector("#From");
const tocurr = document.querySelector("#To");
let msg = document.querySelector("#result");

// populate dropdown
for (let select of dropdown) {
  for (let currCode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;

    if (currCode === "USD" && select.name === "From") {
      newoption.selected = true;
    } else if (currCode === "NPR" && select.name === "To") {
      newoption.selected = true;
    }

    select.appendChild(newoption);
  }

  // update flag on change
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (element) => {
  let currcode = element.value;
  let countryCode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

async function updateExchnageRate() {
  let amount = document.getElementById("Amount");
  let amtval = amount.value;

  console.log(amtval); // just for debugging

  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }

  const url = `${base_url}/convert?from=${fromcurr.value}&to=${tocurr.value}&amount=${amtval}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (!data.result) {
      msg.innerHTML = `Unable to get ${fromcurr.value} to ${tocurr.value} exchange rate.`;
      return;
    }

    msg.innerHTML = `${amtval} ${fromcurr.value} = ${data.result.toFixed(2)} ${tocurr.value}`;
  } catch (error) {
    msg.innerHTML = "Error fetching exchange rate.";
    console.error(error);
  }
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchnageRate();
});

window.addEventListener("load", () => {
  updateExchnageRate();
  updateFlag(fromcurr);
  updateFlag(tocurr);
});