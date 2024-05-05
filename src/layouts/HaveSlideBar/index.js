import classNames from 'classnames/bind';
import { Header, Footer, SlideBar } from '~/layouts/components';

const cx = classNames.bind();

function HaveSlideBar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row', 'row-reverse')}>
                        <div className={cx('l-3', 'm-12', 'c-12')}>
                            <SlideBar />
                        </div>
                        <div className={cx('l-9', 'm-12', 'c-12')}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default HaveSlideBar;
