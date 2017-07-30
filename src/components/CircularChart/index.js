import React, { PropTypes } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function CircularChart(props) {
    return (
        <div>
            <div styleName="outer" className={props.className ? props.className : 'install_decoder'} >
                <CircularProgressbar
                    initialAnimation
                    percentage={props.percentage ? props.percentage : 0}
                    textForPercentage={() => ''}
                    strokeWidth={props.strokeWidth ? props.strokeWidth : 5}
                />
                <div styleName="inner">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {props.children}
                    </div>
                </div>
            </div>
            <div styleName="under_spinner">
                <strong>{`${props.percentage}%`}</strong>
            </div>
            {
                props.upder ? props.upder : null
            }
        </div>
    );
}

CircularChart.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    upder: PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    className: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number

};
export default CSSModules(CircularChart, styles);
