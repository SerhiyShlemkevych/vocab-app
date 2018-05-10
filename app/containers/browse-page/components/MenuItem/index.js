import React from 'react';
import NestedListItem from 'components/nested-list-item';
import {
    Switch,
    List,
    Drawer,
    Divider,
    ListItem,
    FormControlLabel,
    ListItemText
} from 'material-ui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { toggleReviseMode } from './actions';
import * as selectors from './selectors';

const MenuItem = (props) => {
    const { toggleReviseMode, reviseModeEnabled } = props;

    return (
        <NestedListItem isOpen={true} title="Browse" items={[
            {
                key: 'toggleReviseMode',
                content: (
                    <span>
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={toggleReviseMode}
                                    checked={reviseModeEnabled}
                                    value="checkedF"
                                />
                            }
                            label="Revise mode"
                        />
                    </span>
                )
            }
        ]} />
    );
}

const mapStateToProps = (state) => ({
    reviseModeEnabled: selectors.getReviseModeEnabled(state)
});

const mapdDispatchToProps = {
    toggleReviseMode
};

const withConnect = connect(mapStateToProps, mapdDispatchToProps);

const withReducer = injectReducer({ key: 'browsePageMenu', reducer });

export default compose(
    withReducer,
    withConnect
)(MenuItem);
