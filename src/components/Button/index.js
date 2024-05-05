import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            href,
            to,
            onClick,
            children,
            primary,
            className,
            leftIcon,
            rightIcon,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';

        const classes = cx('wrapper', {
            primary,
            [className]: className,
        });

        const props = {};

        if (to) {
            Comp = Link;
            props.to = to;
        } else if (href) {
            Comp = 'a';
            props.href = href;
        }
        return (
            <Comp className={classes} {...props} ref={ref} {...passProps}>
                <span className={cx('icon')}>{leftIcon}</span>
                <span className={cx('content')}>{children}</span>
                <span className={cx('icon')}>{rightIcon}</span>
            </Comp>
        );
    },
);

export default Button;
