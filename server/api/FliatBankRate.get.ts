
import axios from "axios"
export default defineEventHandler(async (event) => {
    const result = await axios.get('http://10.0.42.30:3883/api/rateExchange/today/en')
    // console.log(result)
    return result.data?.data
})