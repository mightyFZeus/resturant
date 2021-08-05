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
  }
  
 
}));
