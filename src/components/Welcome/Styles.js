import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  test:{
      order:1,
      [theme.breakpoints.down('sm')]: {
        order: 2,
      },
  },

  test1:{
        order: 2,
        [theme.breakpoints.down('sm')]: {
            order: 1,
          },
  }
 
}));
