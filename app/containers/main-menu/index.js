import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  List,
  Drawer,
  Divider,
  ListItem,
  ListItemText
} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import width from '../main-menu/width';
import BrowseItem from '../browse-page/components/MenuItem/index';
import ImportItem from '../import-page/components/MenuItem';

const styles = theme => ({
  drawerPaper: {
    width: width,
  },
  toolbar: theme.mixins.toolbar
});

export class MainMenu extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <BrowseItem />
          <Divider />
          <ImportItem />
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default compose(
  withStyles(styles)
)(MainMenu);
