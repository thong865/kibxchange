import axios from "axios"
export default defineEventHandler(async (event) => {
    const result = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20', {
        headers: {
            'X-CMC_PRO_API_KEY': '071b6197-ae24-4d9f-8297-d0b93e8068b9'
        }
    })
    // console.log(result)
    return result.data?.data
})