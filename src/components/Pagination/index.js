import Styles from './Pagination.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function Pagination() {
    const productPages = [
        {
            to: '/product',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <h1>hello</h1>
        </div>
    );
}

export default Pagination;
