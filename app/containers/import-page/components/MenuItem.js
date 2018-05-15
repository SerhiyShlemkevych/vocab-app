import React from 'react';
import {
    ListItem,
    ListItemText
} from 'material-ui/List';

const MenuItem = () => (
    <ListItem button>
        <ListItemText inset primary="Import" />
    </ListItem>
);

export default MenuItem;
