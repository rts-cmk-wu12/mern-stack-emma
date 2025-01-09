import { useParams } from "react-router"

export default function Post() {

    const params = useParams()
    const BASE_URL = 'http://localhost:3000/'
    //const character = useFetch(`${BASE_URL}character/${params.id}`)
    console.log(params)

    return (
        <>
        <p>Hello</p>
        </>
    )
}