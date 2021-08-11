import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  text:{
      
      width: "100%",
      marginBottom: "2rem",
      backgroundColor: "#ffffff",
      "& label.Mui-focused": {
        color: "#06B025"
      },
      "& label": {
        color: "black"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#06B025"
        },
        "&:hover fieldset": {
          borderColor: "#06B025"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#06B025"
        }
      },

      
  }
 
}));
