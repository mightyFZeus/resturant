import React,{useState} from 'react'
import {Grid, Card, } from '@material-ui/core'
import axios from 'axios'
import useStyles from './Styles'
import './Styles.css'






export default function Book() {
    const [images, setImages] = useState([])
    const classes = useStyles()
    const [value, setValue] = useState('')

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
    < >
        {/* <div className='container'>
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
        <form  className={classes.date} noValidate>
      <TextField 
        id="datetime-local"
        label="Desired Date of Delivery"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
      
    </Grid>
        </div> */}
        <div>
                <form onSubmit={submit}>
                    <input type='text' onChange={(e) =>setValue(e.target.value)} />
                    <button>submit</button>
                    <Grid className={classes.root} container spacing={2}>
                        {images !==[] && images.map((img)=>(
                       
                            <Grid className={classes.test} component={Card} md={2}  item >
                                <img className='test' src={img.recipe.image} alt={img.recipe.label} />
                                <p className='text'>{img.recipe.label}</p>
                            </Grid>
                            
                           
                        ))}
                         </Grid> 
                       
                   
                </form>
        </div>
    </>
  );
}
