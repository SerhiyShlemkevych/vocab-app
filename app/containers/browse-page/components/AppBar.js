import React from 'react';
import {
    Toolbar,
    Typography,
    AppBar,
    withStyles,
    Select,
    MenuItem
} from 'material-ui';
import classNames from 'classnames';
import menuWidth from 'containers/main-menu/width'

const styles = theme => ({
    appBar: {
        width: `calc(100% - ${menuWidth})`,
        marginLeft: menuWidth
    },
    alignRight: {
        marginLeft: 'auto',
    },
    select: {        
        color: theme.palette.primary.contrastText
    }
});

const Bar = ({
    title,
    classes,
    changeCriterion,
    changeDirection,
    sortCriterion,
    sortDirection
}) => (
        <AppBar className={classes.appBar} color="primary">
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap>
                    {title}
                </Typography>
                <Select
                    value={sortCriterion}
                    onChange={changeCriterion}
                    className={classNames(classes.select, classes.alignRight)}
                >
                    <MenuItem value={'ADD_DATE'}>{'Add Date'}</MenuItem>
                    <MenuItem value={'REVISED_DATE'}>{'Rev. Date'}</MenuItem>
                    <MenuItem value={'PRIORITY'}>{'Priority'}</MenuItem>
                    <MenuItem value={'RANDOM'}>{'Random'}</MenuItem>
                </Select>
                <Select
                    value={sortDirection}
                    onChange={changeDirection}
                    className={classes.select}
                >
                    <MenuItem value={'ASC'}>{'Ascending'}</MenuItem>
                    <MenuItem value={'DESC'}>{'Descending'}</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );

export default withStyles(styles)(Bar);
