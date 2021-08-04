import React,{useState,useEffect} from 'react'
import "./Styles.css";
import 'react-slideshow-image/dist/styles.css'
import axios from 'axios'
import {Slide} from 'react-slideshow-image'



export default function Rice() {
    const [images, setImages] = useState([])


    useEffect(() => {
       axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=baed94d6&app_key=aa9ae062be511ed691b26cbcfde058de&mealType=Breakfast&imageSize=SMALL')
       .then((res)=>{
           const result = res.data.hits
           setImages(result)
           console.log(result)
       })
       .catch((error)=>{
           console.log(error)
       })
    }, [])


    const properties = {
        duration: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
      };
  return (
    <div className="App">
        <Slide {...properties}>
            {images !==[] && images.map((img)=>(
                <div className="each-slide">
                    <img className='img-test' alt='img-slides' src={img.recipe.image} />
                </div>
            ))}
        </Slide>
    </div>
  );
}
