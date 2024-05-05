import classNames from 'classnames/bind';
import { Header, Footer } from '~/layouts/components';

const cx = classNames.bind();

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
