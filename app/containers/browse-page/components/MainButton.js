import React from 'react';
import {
    withStyles,
    Button,
    Icon
} from 'material-ui';

const styles = {
    button: {
        position: 'fixed',
        bottom: '5%',
        right: '5%',
    }
};

export const MainButton = ({ classes, onClick }) => (
    <Button className={classes.button} variant="fab" color="secondary">
        <Icon>add</Icon>
    </Button>
);

export default withStyles(styles)(MainButton);