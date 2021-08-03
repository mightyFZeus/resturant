import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  grid:{
      order:1,
      [theme.breakpoints.down('sm')]: {
        order: 2,
      },
  },

  grid1:{
        order: 2,
        [theme.breakpoints.down('sm')]: {
            order: 1,
          },
  }, main:{
    marginBottom:'5em'
  }
 
}));
