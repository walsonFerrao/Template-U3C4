function storeSearchterm(term) {

let url=`https://gnews.io/api/v4/search?q=${term}&token=02df12c5c0a3b0dbb395f95a6be6e7df

`

return url
}

export default storeSearchterm