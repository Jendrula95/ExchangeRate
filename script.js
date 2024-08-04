const currOne = document.querySelector("#currency-one");
const currTwo = document.querySelector("#currency-two");
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const customPLNRate = 4.3; 

const calc = () => {
  fetch(`http://api.nbp.pl/api/exchangerates/tables/C/`)
    .then((res) => res.json())
    .then((data) => {
      const curr1 = currOne.value;
      const curr2 = currTwo.value;

      const table = data[0];

      
      const rates = [
        ...table.rates,
        { code: "PLN", ask: customPLNRate }, 
      ];
      const rate1Obj = rates.find((rate) => rate.code === curr1) || {
        code: "PLN",
        ask: customPLNRate,
      };
      const rate2Obj = rates.find((rate) => rate.code === curr2) || {
        code: "PLN",
        ask: customPLNRate,
      };

      if (rate1Obj && rate2Obj) {
        const rate = rate2Obj.ask / rate1Obj.ask;
        rateInfo.textContent = `1 ${curr1} = ${rate.toFixed(4)} ${curr2}`;
        amountTwo.value = (amountOne.value * rate).toFixed(2);
      } else {
        rateInfo.textContent = `Brak danych dla wybranej waluty`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const swapCurr = () => {
  let oldVal =  currOne.value
  currOne.value = currTwo.value;
  currTwo.value = currOne.value;
  currTwo.value = oldVal;
  calc();
}



currOne.addEventListener("change", calc);
currTwo.addEventListener("change", calc);
amountOne.addEventListener("input", calc);
swapBtn.addEventListener('click', swapCurr)


calc();


