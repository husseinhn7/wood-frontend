import {useEffect, useState} from "react"
import axios from "axios"

const Test = () =>{
    const [data, setData] = useState({})
    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get("https://reqres.in/api/users?page=1")
            const ApiData = await response.data
            setData(ApiData.data)
            console.log(ApiData)
        }
        getData()
    },[])
    return (
        <div>
           {
            data.map((obj)=>{
                return <h1>{obj.first_name}</h1>
            })
           }
        </div>
    )
}
export default Test