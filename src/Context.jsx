import axios from 'axios'
import React, { useState, createContext} from 'react'

    export const ImageContext = createContext()

 export const Context = (props) => {

    
    const [images, setImages] = useState([])
    const [value, setValue] = useState('')
  
    // const [value, setValue] = useState('')

    const getData = async (res) =>{
        const result = await  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=baed94d6&app_key=aa9ae062be511ed691b26cbcfde058de&mealType=Breakfast&imageSize=SMALL`)
        setImages(result.data.hits)
        console.log(result)
    }

    const submit =(e) =>{
        e.preventDefault()
        getData()
        setValue('')
    }
    return (
        <ImageContext.Provider value={ {images, submit, value, setValue}}>
                {props.children}
        </ImageContext.Provider>
    )
}


