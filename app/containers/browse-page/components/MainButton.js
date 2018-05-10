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

export const MainButton = ({ classes, onClick, icon }) => (
    <Button className={classes.button} onClick={onClick} variant="fab" color="secondary">
        <Icon>{icon}</Icon>
    </Button>
);

export default withStyles(styles)(MainButton);