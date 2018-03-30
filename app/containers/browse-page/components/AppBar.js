import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
const styles = {};

const Bar = ({ title, classes }) => (
    <AppBar color="primary">
        <Typography variant="title" color="inherit">
            {title}
        </Typography>
    </AppBar>
);

export default withStyles(styles)(Bar);
