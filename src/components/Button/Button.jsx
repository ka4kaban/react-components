import React from 'react';
import './button.scss';
import classNames from 'classnames';
import { string, any, func } from 'prop-types';

export const ButtonStyle = {
    DEFAULT: 'default',
};

export class Button extends React.Component {
    static propTypes = {
        className: string,
        children: any,
        onClick: func,
        buttonStyle: string
    };

    static defaultProps = {
        onClick() {
        },
        buttonStyle: ButtonStyle.DEFAULT
    };

    render() {
        const { className, children, onClick, buttonStyle } = this.props;

        return (
            <button className={classNames('button', `button_${buttonStyle}`, className)}
                onClick={onClick}>
                {children}
            </button>
        );
    }
}