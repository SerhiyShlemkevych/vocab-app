import { withStyles } from 'material-ui';
import React from 'react';
import Word from './Word';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    container: {
        padding: '1rem',
        width: '100%'
    }
})

const List = ({
    items,
    classes,
    onPlusClick,
    onMinusClick
}) => (
        <div className={classes.container}>
            <div className={classes.toolbar} />
            {items.map(item => (
                <Word
                    onMinusClick={() => onMinusClick(item)}
                    onPlusClick={() => onPlusClick(item)}
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    );

export default withStyles(styles)(List);
