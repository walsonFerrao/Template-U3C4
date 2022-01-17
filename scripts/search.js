function storeSearchterm(term) {

let url=`https://gnews.io/api/v4/search?q=${term}&token=bd92c19a03607d29c5008e29546b60c2`

return url
}

export default storeSearchterm