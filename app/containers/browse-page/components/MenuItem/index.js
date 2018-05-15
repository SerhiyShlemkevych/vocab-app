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
import {
    toggleReviseMode,
    toggleForeignVisibility,
    toggleNativeVisibility
} from './actions';
import * as selectors from './selectors';

const MenuItem = (props) => {
    const {
        toggleReviseMode,
        toggleForeignVisibility,
        toggleNativeVisibility,
        reviseModeEnabled,
        nativeVisible,
        foreignVisible
    } = props;

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
                                    value="checkedA"
                                />
                            }
                            label="Revise mode"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={toggleForeignVisibility}
                                    checked={foreignVisible}
                                    value="checkedB"
                                />
                            }
                            label="Foreign visible"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={toggleNativeVisibility}
                                    checked={nativeVisible}
                                    value="checkedC"
                                />
                            }
                            label="Native visible"
                        />
                    </span>
                )
            }
        ]} />
    );
}

const mapStateToProps = (state) => ({
    reviseModeEnabled: selectors.getReviseModeEnabled(state),
    foreignVisible: selectors.getForeignVisible(state),
    nativeVisible: selectors.getNativeVisible(state)
});

const mapdDispatchToProps = {
    toggleReviseMode,
    toggleForeignVisibility,
    toggleNativeVisibility
};

const withConnect = connect(mapStateToProps, mapdDispatchToProps);

const withReducer = injectReducer({ key: 'browsePageMenu', reducer });

export default compose(
    withReducer,
    withConnect
)(MenuItem);
