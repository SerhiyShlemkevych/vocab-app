import React from 'react';
import { withStyles } from 'material-ui';
import { Button } from 'material-ui';
import classNames from 'classnames';

const styles = theme => ({
    page: {
        padding: '0rem',
        minWidth: '2rem',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
    },
    container: {
        paddingBottom: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    activePage: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    }
})

const Pagination = ({ classes, currentPage, maxPage, setPage }) => {
    const pages = [];
    if (currentPage > 4) pages.push(1);
    if (currentPage > 3) pages.push(currentPage - 3);
    if (currentPage > 2) pages.push(currentPage - 2);
    if (currentPage > 1) pages.push(currentPage - 1);
    pages.push(currentPage);
    if (currentPage < maxPage - 1) pages.push(currentPage + 1);
    if (currentPage < maxPage - 2) pages.push(currentPage + 2);
    if (currentPage < maxPage - 3) pages.push(currentPage + 3);
    if (currentPage < maxPage - 4) pages.push(maxPage);

    return (
        <div className={classes.container}>
            {pages.map(page => (
                <Button
                    onClick={() => setPage(page)}
                    className={classNames(
                        classes.page,
                        page === currentPage
                            ? classes.activePage
                            : ''
                    )}
                    key={page}>
                    {page}
                </Button>
            ))}
        </div>
    );
};

export default withStyles(styles)(Pagination);
