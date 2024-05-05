import styles from './account.module.scss';
import classNames from 'classnames/bind';
import { Login } from '~/components';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'c-12', 'm-12', 'l-6')}>
                        <div>
                            <h3 className={cx('title')}>Đăng nhập</h3>
                            <Login />
                        </div>
                    </div>
                    <div className={cx('col', 'c-12', 'm-12', 'l-6')}>
                        <div>
                            <h3 className={cx('title')}>Đăng ký</h3>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
