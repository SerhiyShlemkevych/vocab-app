import { Paper, Typography, withStyles } from 'material-ui';
import React from 'react';
import classNames from 'classnames';

const styles = {
    container: {
        display: 'flex',
        marginBottom: '1rem'
    },
    mid: {
        marginLeft: '0.5rem',
        marginRight: '0.5rem'
    },
    wordPart: {
        padding: '0.3rem',
        overflow: 'hidden'
    },
    native: {
        width: '45%'
    },
    foreign: {
        width: '45%'
    },
    priority: {
        width: '10%',
        textAlign: 'center'
    },
};

const Word = ({ classes, data }) => (
    <div className={classes.container}>
        <Paper className={
            classNames(
                classes.foreign,
                classes.wordPart
            )
        }>
            <Typography variant="title">
                {data.foreign}
            </Typography>
        </Paper>
        <Paper className={
            classNames(
                classes.mid,
                classes.native,
                classes.wordPart
            )
        }>
            <Typography variant="title">
                {data.native}
            </Typography>
        </Paper>
        <Paper className={
            classNames(
                classes.priority,
                classes.wordPart
            )
        }>
            <Typography variant="title">
                {data.priority}
            </Typography>
        </Paper>
    </div>
);

export default withStyles(styles)(Word);
