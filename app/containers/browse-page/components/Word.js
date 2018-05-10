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
    revised: {
        background: 'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 63%,rgba(255,255,255,1) 84%,rgba(255,255,255,1) 91%,rgba(255,255,255,1) 91%,rgba(121,196,124,1) 100%);'
    }
};

const now = new Date();
const _30days = 2629746000;

const Word = ({ classes, data }) => (
    <div className={classes.container}>
        <Paper className={
            classNames(
                classes.foreign,
                classes.wordPart,
                (now - data.revisedDate < _30days)
                    ? classes.revised
                    : ''

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
                classes.wordPart,
                (now - data.revisedDate < _30days)
                    ? classes.revised
                    : ''
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
