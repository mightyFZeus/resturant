import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  formControl: {
    width:'700px',
    marginBottom:'2em',
    [theme.breakpoints.down('sm')]: {
        width:'300px',
      },
  },

  date:{
    [theme.breakpoints.up('md')]: {
        marginLeft:'20em'
      },
  },
  
  
  root:{
      flexGrow:1,
      marginLeft:'1em',
      [theme.breakpoints.up('md')]: {
        marginLeft:'3em'
      },
      
  },
  test:{
    [theme.breakpoints.up('md')]: {
       height:'400px'
      },
     [theme.breakpoints.down('sm')]: {
        marginRight:'1em',
        marginBottom:'1em',
      },
      marginRight:'1em',
      marginBottom:'1em'
  }
  
 
}));
