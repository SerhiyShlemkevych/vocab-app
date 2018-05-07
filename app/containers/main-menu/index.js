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
          <ListItem button>
            <ListItemText primary="Browse" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default compose(
  withStyles(styles)
)(MainMenu);
