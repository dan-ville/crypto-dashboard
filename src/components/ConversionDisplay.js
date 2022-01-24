const ConversionDisplay = ({ result }) => {
  const { from_currency, to_currency } = result.params

  return (
    <div className="conversion-display">
      <p className="total">{result.total.toLocaleString("en-US")}</p>
      <p>
        {result.amount} {from_currency} to {to_currency}
      </p>
    </div>
  )
}

export default ConversionDisplay
