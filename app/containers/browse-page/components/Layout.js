import React from 'react';
import { withStyles } from 'material-ui';

const styles = {
    container: {
    }
};

const Layout = ({ children, classes }) => (
    <div className={classes.container}>
        {children}
    </div>
);

export default withStyles(styles)(Layout);
