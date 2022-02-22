import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({loginButton, setLoginButton}) => {
    const classes = useStyles();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
    };
    
    const loginButtonAction = () => {
        if (token){
            logout()
            setLoginButton("Login");
            goToLogin(navigate)
        } else {
            goToLogin(navigate);
        };
    };

    return (

        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
            HermenEddit
            </Typography>
            <Button color="inherit" onClick={() => goToFeed(navigate)} > Home </Button>
            <Button color="inherit" onClick={loginButtonAction}>{loginButton}</Button>
          </Toolbar>
        </AppBar>
        </div>
    );
};

export default Header;