import React,{useState,useEffect} from 'react'
import {Grid, FormControl, InputLabel, Select, FormHelperText, NativeSelect} from '@material-ui/core'
import axios from 'axios'
import useStyles from './Styles'
import './Styles'




export default function Book() {
    const [images, setImages] = useState([])
    const classes = useStyles()


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
    <div >
        <Grid >
        
            <FormControl variant="filled"  >
                <InputLabel  htmlFor="filled-age-native-simple">Food Name</InputLabel>
                <Select
                native
                className={classes.formControl}
            
                >
                    {images !==[] && images.map((img)=>(
                    <option>
                        {img.recipe.label}
                    </option>
                ))}
                </Select>
                
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Meal Type</InputLabel>
                <Select
                native
                
                >
                <option aria-label="None" value="" />
                <option >Main Course</option>
                <option >Dessert</option>
                
                </Select>
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Meal Time</InputLabel>
                <Select
                native
                
                >
                <option aria-label="None" value="" />
                <option >BreakFast</option>
                <option >Lunch</option>
                <option >Dinner</option>
                
                </Select>
            </FormControl>
        </Grid>
    </div>
  );
}
