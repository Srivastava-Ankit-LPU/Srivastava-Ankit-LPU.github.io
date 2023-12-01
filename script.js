function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = 'INR';
  const toCurrency = document.getElementById('toCurrency').value;
  const conversionRates = {
    USD: 0.012,
    AED: 0.044,
    GBP: 0.0095,
    CAD: 0.016,
    SGD: 0.016,
    EUR: 0.011,
    JPY: 1.76,
    PKR: 3.43,
    ZAR: 0.22,
  };

  if (toCurrency === 'ALL') {
    let resultHTML = '';
    for (const currency in conversionRates) {
      const convertedAmount = (amount * conversionRates[currency]).toFixed(2);
      resultHTML += `1 ${fromCurrency} = ${conversionRates[currency]} ${currency}<br>${amount} ${fromCurrency} = ${convertedAmount} ${currency}<br>`;
    }
    document.getElementById('result-container').innerHTML = resultHTML;
  } else {
    const convertedAmount = (amount * conversionRates[toCurrency]).toFixed(2);
    document.getElementById('result-container').innerHTML = `1 ${fromCurrency} = ${conversionRates[toCurrency]} ${toCurrency}<br>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }
}
