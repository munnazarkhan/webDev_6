const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");

// Update Flags
function updateFlag(selectElement, flagElement) {
    const countryCode =
        selectElement.options[selectElement.selectedIndex]
        .dataset.country;

    flagElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Event Listeners for Flag Change
fromCurrency.addEventListener("change", () => {
    updateFlag(fromCurrency, fromFlag);
});

toCurrency.addEventListener("change", () => {
    updateFlag(toCurrency, toFlag);
});

// Convert Currency
convertBtn.addEventListener("click", convertCurrency);

async function convertCurrency() {

    const amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    try {

        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        const data = await response.json();

        const rate = data.rates[to];

        const convertedAmount = (amount * rate).toFixed(2);

        result.innerText =
            `${amount} ${from} = ${convertedAmount} ${to}`;

    } catch (error) {

        result.innerText = "Something went wrong!";
        console.log(error);

    }
}