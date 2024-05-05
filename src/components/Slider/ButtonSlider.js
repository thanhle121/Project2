import Styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import {
    faCircleArrowLeft,
    faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(Styles);

function ButtonSlider({ moveSlide, direction, className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <button onClick={moveSlide} className={classes}>
            <FontAwesomeIcon
                className={cx('icon')}
                icon={
                    direction === 'left'
                        ? faCircleArrowLeft
                        : faCircleArrowRight
                }
            ></FontAwesomeIcon>
        </button>
    );
}

export default ButtonSlider;
