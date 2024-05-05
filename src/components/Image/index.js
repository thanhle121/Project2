import Styles from './Image.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
const cx = classNames.bind(Styles);

const Image = forwardRef(({ className, src, alt, ...prop }, ref) => {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return <img className={classes} src={src} alt={alt} ref={ref} {...prop} />;
});
export default Image;
