import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  test:{
      marginBottom:'.9em',
      backgroundColor: '#F8FBF5',
      "&:hover": {
        backgroundColor: '#ffffff',
        borderBottom:' 5px solid #06B025;'
      }
  }
 
 
}));
