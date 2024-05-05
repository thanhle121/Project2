import styles from './header.module.scss';
import 'tippy.js/themes/light.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faMagnifyingGlass,
    faShoppingBag,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import routers from '~/config/routers';
import { Button, Image, Search } from '~/components';

const cx = classNames.bind(styles);

function Header() {
    const optionSales = [
        { to: '/', numberPercentSale: 50 },
        { to: '/', numberPercentSale: 60 },
        { to: '/', priceSale: 89 },
        { to: '/', priceSale: 99 },
        { to: '/', priceSale: 149 },
        { to: '/', priceSale: 299 },
    ];

    const menuSubProduct = [
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
    ];
    const [isMobile, setIsMobile] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [heightHeader, setHeightHeader] = useState();
    const headerRef = useRef(null);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        if (scrollPosition > heightHeader) setIsMobile(true);
        else setIsMobile(false);
    }, [scrollPosition]);

    useEffect(() => {
        setHeightHeader(headerRef.current.clientHeight);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={cx('wrapper', {
                'affix-mobile': isMobile,
            })}
        >
            <div className={cx('top-bar')}>
                <p>
                    Hotline Mua Hàng: 0973 285 886 | Hotline CSKH: 1900 886 803
                    - Ext 1 | Email CSKH: web@360boutique.vn
                </p>
            </div>
            <div className={cx('header-main')}>
                <div className={cx('header-mid', 'header-main-separate')}>
                    <Link to={routers.root} className={cx('header-logo-link')}>
                        <Image
                            className={cx('header-logo')}
                            src={
                                'https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png'
                            }
                            alt={'logo'}
                        />
                    </Link>

                    <Search classNames={cx('header-search')} />

                    <div className={cx('action')}>
                        <Button
                            className={cx('action-item')}
                            to={routers.account}
                        >
                            {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
                        </Button>
                        <Button className={cx('action-item')}>
                            {
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                ></FontAwesomeIcon>
                            }
                        </Button>
                        <Button className={cx('action-item')}>
                            {
                                <FontAwesomeIcon
                                    icon={faShoppingBag}
                                ></FontAwesomeIcon>
                            }
                        </Button>
                    </div>
                </div>

                <div className={cx('header-menu', 'header-main-separate')}>
                    {isMobile && (
                        <Link
                            to={routers.root}
                            className={cx('header-logo-link')}
                        >
                            <Image
                                className={cx('header-logo')}
                                src={
                                    'https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png'
                                }
                                alt={'logo'}
                            />
                        </Link>
                    )}

                    <div className={cx('options-menu')}>
                        <div className={cx('option-menu')}>
                            <Link
                                className={cx('header-menu-item')}
                                to={routers.aboutUs}
                            >
                                Giới Thiệu
                            </Link>
                        </div>
                        <div className={cx('option-menu')}>
                            <Link
                                className={cx('header-menu-item')}
                                to={routers.product}
                            >
                                Sản phẩm
                            </Link>
                        </div>
                        <div className={cx('option-menu')}>
                            <Link
                                className={cx('header-menu-item')}
                                to={routers.sales}
                            >
                                Khuyến mãi
                            </Link>
                        </div>

                        <div className={cx('option-menu')}>
                            <Link
                                className={cx('header-menu-item')}
                                to={routers.news}
                            >
                                Tin tức
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
