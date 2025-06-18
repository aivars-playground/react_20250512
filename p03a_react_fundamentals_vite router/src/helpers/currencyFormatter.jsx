const currencyFormatter = Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
})

export default currencyFormatter