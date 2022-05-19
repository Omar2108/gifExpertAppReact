import { useState} from "react"


export const useFechsGifs = ( )=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(()=>{
        setState({
            data:[1,2,3],
            loading: false
        })
    })

    return state; 

}