import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import { ExpandLess, ExpandMore } from 'material-ui-icons';

const styles = {
    nested: {
        paddingLeft: '2rem'
    }
};

class NestedListItem extends React.Component {
    componentWillMount() {
        this.setState({ isOpen: this.props.isOpen });
    }

    toggleList() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        const { title, items, classes } = this.props;

        return (
            <div>
                <ListItem onClick={this.toggleList.bind(this)}>
                    <ListItemText inset primary={title} />
                    {this.state.isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {items.map(item => (
                            <ListItem key={item.key} button className={classes.nested} onClick={item.onClick}>
                                {item.content}
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
        )
    }
};

export default withStyles(styles)(NestedListItem);
