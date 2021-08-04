import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  test:{
      marginBottom:'.9em',
      
      "&:hover": {
        backgroundColor: '#F8FBF5',
        borderBottom:' 5px solid #06B025;'
      }
      
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    maxWidth: 345,
  },

  root:{
      flewGrow: 1
  }
 
 
}));
