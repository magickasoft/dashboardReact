import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import FIcon from 'react-fontawesome';
import CheckBoxItem from 'components/CheckBoxItem';

import styles from './styles.css';

function UserPanel(props) {
    return (
        <div styleName='row_items'>
            <CheckBoxItem
                value={props.users.all.getOrElse(false)}
                onChange={props.allHandler}
            >
                All
            </CheckBoxItem>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.users.subscriber.getOrElse(false)}
                    onChange={props.subscriberHandler}
                >
                    Subscribers
                </CheckBoxItem>
                <div styleName="subscribers_user_block">
                    <div styleName="user_inner" />
                </div>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.users.gofundis.getOrElse(false)}
                    onChange={props.gofundisHandler}
                >
                    GoFundis
                </CheckBoxItem>
                <div styleName="gofundis_user_block">
                    <div styleName="user_inner" />
                </div>
            </div>
        </div>
    );
}

UserPanel.propTypes = {
    users: PropTypes.object.isRequired,
    gofundisHandler: PropTypes.func.isRequired,
    subscriberHandler: PropTypes.func.isRequired,
    allHandler: PropTypes.func.isRequired
};

export default CSSModules(UserPanel, styles);
