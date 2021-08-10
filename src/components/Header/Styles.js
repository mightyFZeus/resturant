import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main:{
    marginBottom:'5em',
    [theme.breakpoints.down('sm')]: {
      marginBottom:'1em',
    },
  },
  
 
}));
