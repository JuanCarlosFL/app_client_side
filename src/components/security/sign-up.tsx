import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from "@material-ui/core"
import { useStyles } from '../../theme/useStyles';
import { Link } from 'react-router-dom';
import { useState } from "react";

export const SignUp = () => {
    const [ user, setUser ] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',

    })
    const classes = useStyles();

    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item lg={6} md={8}>
                    <Card className={classes.card}>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>person_add</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary" align="center">Sign up</Typography>
                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                        label="Surname"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <Button 
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                to="/login"
                                className={classes.link}
                            >
                                Do you have an account? Login in
                            </Link>
                        </form>
                    </Card>
                    
                </Grid>
            </Grid>
        </Container>
    )
}