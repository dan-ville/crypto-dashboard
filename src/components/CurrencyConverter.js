import axios from "axios"
import React, { useState } from "react"
import ConversionDisplay from "./ConversionDisplay"

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC")
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("ETH")
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState()

  const handleConvert = async () => {
    const params = {
      from_currency: chosenPrimaryCurrency,
      to_currency: chosenSecondaryCurrency,
      function: "CURRENCY_EXCHANGE_RATE",
    }
    const options = {
      method: "GET",
      url: "http://localhost:8000/convert",
      params,
    }
    try {
      const response = await axios.request(options)
      console.log(response)
      const exchangeRate = parseFloat(response.data)
      setResult({
        exchangeRate,
        total: exchangeRate * amount,
        params,
        amount,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="currency-converter">
      <h2>Currency converter</h2>
      <div className="input-box">
        <div className="field-group">
          <label>From</label>
          <div>
            <input
              type="number"
              name="currency-amount-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              name="currency-option-1"
              id="currency-option-1"
              className="currency-options"
              value={chosenPrimaryCurrency}
              onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
            >
              {currencies
                .filter((c) => c !== "USD")
                .map((currency, _i) => (
                  <option value={currency} key={_i}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="field-group">
          <label>To</label>
          <div>
            <input
              type="number"
              name="currency-amount-2"
              value={result?.exchangeRate || ""}
              disabled
            />
            <select
              name="currency-option-2"
              id="currency-option-2"
              className="currency-options"
              value={chosenSecondaryCurrency}
              onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
            >
              {currencies
                .filter((c) => c !== chosenPrimaryCurrency)
                .map((currency, _i) => (
                  <option value={currency} key={_i}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <button id="convert-button" onClick={handleConvert}>
          Convert
        </button>
      </div>
      {result ? <ConversionDisplay result={result} /> : null}
      
    </div>
  )
}

export default CurrencyConverter
