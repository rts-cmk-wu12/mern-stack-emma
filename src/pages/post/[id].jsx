import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Post( ) {
    const [data, setData] = useState({})

    const id = useParams().id
    const BASE_URL = 'http://localhost:3000/'

    useEffect(() => {
        async function fetchPost() {
            const post = await fetch(`${BASE_URL}post/${id}`)
            //console.log(post) 
            setData(post)
        }
        
        fetchPost()
    }, [id])
    
    //console.log(data)
    return (
        <>
        <p>Hello {data.title}</p>
        </>
    )
}