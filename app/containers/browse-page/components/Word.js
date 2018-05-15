import { Paper, Typography, withStyles, Button } from 'material-ui';
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
        padding: '0.4rem',
        overflow: 'hidden'
    },
    native: {
        width: '45%'
    },
    foreign: {
        width: '45%'
    },
    priority: {
        padding: '0.3rem 0.7rem',
        display: 'flex',
        justifyContent: 'space-between',
        width: '10%',
        textAlign: 'center',
    },
    revised: {
        background: 'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 63%,rgba(255,255,255,1) 84%,rgba(255,255,255,1) 91%,rgba(255,255,255,1) 91%,rgba(121,196,124,1) 100%);'
    },
    priorityButton: {
        padding: '0 0',
        minHeight: '0px',
        minWidth: '1rem',
        fontSize: '1rem'
    },
    inline: {
        alignSelf: 'center'
    }
};

const Word = ({
    classes,
    isNativeVisible,
    isForeignVisible,
    isRevised,
    data,
    onPlusClick,
    onMinusClick
}) => (
        <div className={classes.container}>
            <Paper className={
                classNames(
                    classes.foreign,
                    classes.wordPart,
                    (isRevised)
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
                    (isRevised)
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
                <Typography className={classes.inline} variant="title">
                    {data.priority}
                </Typography>
                <Button
                    onClick={onPlusClick}
                    className={classNames(
                        classes.priorityButton,
                        classes.inline
                    )} color="primary">
                    {"+"}
                </Button>
                <Button
                    onClick={onMinusClick}
                    className={classNames(
                        classes.priorityButton,
                        classes.inline
                    )} color="primary">
                    {"-"}
                </Button>
            </Paper>
        </div>
    );

export default withStyles(styles)(Word);
