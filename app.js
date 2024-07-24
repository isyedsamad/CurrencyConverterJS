let inputVal = document.getElementById("inputVal");
let outputVal = document.getElementById("outputVal");
let from = document.getElementById("from");
let to = document.getElementById("to");

let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

inputVal.addEventListener('input', () => {
    // console.log(inputVal.value);
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.value.toLowerCase()}.json`;
    fetchData(url, from.value.toLowerCase(), to.value.toLowerCase());
})

from.addEventListener('input', () => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.value.toLowerCase()}.json`;
    fetchData(url, from.value.toLowerCase(), to.value.toLowerCase());
})

to.addEventListener('input', () => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.value.toLowerCase()}.json`;
    fetchData(url, from.value.toLowerCase(), to.value.toLowerCase());
})

async function fetchData(URL, fromVal, toVal) {
    let responseOne = await fetch(URL);
    let responseTwo = await responseOne.json();
    let finalVal = inputVal.value * responseTwo[fromVal][toVal];
    outputVal.value = finalVal
}