import { withStyles } from 'material-ui';
import React from 'react';
import WordData from './WordData';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    container: {
        padding: '1rem',
        width: '100%'
    }
})

const List = ({
    items,
    classes
}) => (
        <div className={classes.container}>
            <div className={classes.toolbar} />
            {items.map(item => (
                <WordData
                    key={item}
                    id={item}
                />
            ))}
        </div>
    );

export default withStyles(styles)(List);
