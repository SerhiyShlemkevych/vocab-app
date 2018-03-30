import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import styled from 'styled';

const StyledDrawer = styled(Drawer)({
    width: '10rem',
    height: '10rem',
    //display: 'none'
});

export class MainMenu extends React.Component {

    render() {

        return (
            <StyledDrawer
                variant="permanent"

            >
                <Divider />
                <List>{"cdcd"}</List>
                <Divider />
                <List>{"cdcsdcvcccccccccccccc"}</List>
            </StyledDrawer>
        );
    }
}

export default compose(
)(MainMenu);
