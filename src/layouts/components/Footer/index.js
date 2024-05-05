import {
    faEnvelopeOpenText,
    faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Button } from '~/components';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const workplace = [
        '242 Thái Hà, Q.Đống Đa, HN',
        '20 Dương Quảng Hàm, Q.Cầu Giấy, HN',
        '11 Dương Quảng Hàm, Q.Cầu Giấy, HN',
        '63 Đại Cổ Việt, Q.Hai Bà Trưng, HN',
        '27 Chùa Bộc, Q.Đống Đa, HN',
        '296 Nguyễn Trãi, Q.Nam Từ Liêm, HN',
        '24 Trần Phú, Hà Đông, HN',
        '346 Cầu Giấy, Q.Cầu Giấy, HN',
        '29 Phố Nhổn, Q.Nam Từ Liêm, HN',
        '69 Quang Trung, Hà Đông, HN',
        '272 Tô Hiệu, Q.Lê Chân, HP',
    ];

    const generalPolicies = [
        'Hướng Dẫn Mua Hàng',
        'Hình Thức Thanh Toán',
        'Chính Sách Bảo Hành',
        'Chính Sách Đổi Hàng',
        'Chính Sách Vận Chuyển',
        'Điều Khoản Dịch Vụ',
        'Giới Thiệu',
    ];

    const contactUs = [
        'CÔNG TY CỔ PHẦN THỜI TRANG 360',

        'VPGD: 37 Trung Kinh, Trung Hòa, Cầu Giấy, Hà Nội',

        'Facebook thời trang nam: 360Boutique',

        'Facebook kids: 360Kids',

        'Hotline: 0973 285 886',

        'Email: web@360boutique.vn',
        'Website: https://360boutique.vn/',

        'GPKD: 0107756568',
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-footer')}>
                <div className={cx('top-footer-content')}>
                    <FontAwesomeIcon
                        icon={faEnvelopeOpenText}
                    ></FontAwesomeIcon>
                    <span>Đăng kí nhận tin</span>
                </div>
                <div className={cx('top-footer-register')}>
                    <input className={cx('top-footer-input')} />
                    <Button primary>Đăng kí</Button>
                </div>
                <div className={cx('top-footer-contact')}>
                    <FontAwesomeIcon icon={faSquarePhone}></FontAwesomeIcon>
                    <span>Hỗ trợ / Mua hàng: 0908090744</span>
                </div>
            </div>
            <div className={cx('footer-mid')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <h4 className={cx('footer-mid-title')}>
                                HỆ THỐNG CỬA HÀNG
                            </h4>
                            {workplace.map((homeWork, index) => {
                                return (
                                    <p
                                        className={cx('footer-mid-item')}
                                        key={index}
                                    >
                                        {homeWork}
                                    </p>
                                );
                            })}
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <h4 className={cx('footer-mid-title')}>
                                CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG
                            </h4>
                            {generalPolicies.map((homeWork, index) => {
                                return (
                                    <p
                                        className={cx('footer-mid-item')}
                                        key={index}
                                    >
                                        {homeWork}
                                    </p>
                                );
                            })}
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <h4 className={cx('footer-mid-title')}>ĐỊA CHỈ</h4>
                            {contactUs.map((homeWork, index) => {
                                return (
                                    <p
                                        className={cx('footer-mid-item')}
                                        key={index}
                                    >
                                        {homeWork}
                                    </p>
                                );
                            })}
                            <img
                                className={cx('contact-img')}
                                src="https://360boutique.vn/wp-content/uploads/2019/04/da-thong-bao.png"
                                alt=""
                            ></img>
                        </div>
                        <div className={cx('col', 'l-3', 'm-6', 'c-12')}>
                            <h4 className={cx('footer-mid-title')}>Fanpage</h4>
                            {workplace.map((homeWork, index) => {
                                return (
                                    <p
                                        className={cx('footer-mid-item')}
                                        key={index}
                                    >
                                        {homeWork}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <p className={cx('footer-bottom-title')}>
                    Copyright © 2017 360boutique. All Rights Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
