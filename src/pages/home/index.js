import Styles from './home.module.scss';
import classNames from 'classnames/bind';

import { Slider, ProductItem } from '~/components';

const cx = classNames.bind(Styles);
function Home() {
    const listProductBestSeller = [
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
    ];
    const listProductNew = [
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
        {
            name: 'Áo phông nam APHTK338',
            img: 'https://360boutique.vn/wp-content/uploads/2022/05/APHTK338-QATTK304-1-400x600.jpg',
            to: '',
            prices: {
                priceDefault: 315,
                priceCompetitive: 199,
            },
        },
    ];

    const listNews = [
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=400&h=250&zc=1&q=90',
            dateUp: '04/08/2022',
            nameContent:
                'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            describeContent:
                'Cơ hội để sở hữu những sản phẩm chất lượng của 360® với mức giá tốt nhất.',
        },
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=400&h=250&zc=1&q=90',
            dateUp: '04/08/2022',
            nameContent:
                'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            describeContent:
                'Cơ hội để sở hữu những sản phẩm chất lượng của 360® với mức giá tốt nhất.',
        },
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=400&h=250&zc=1&q=90',
            dateUp: '04/08/2022',
            nameContent:
                'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            describeContent:
                'Cơ hội để sở hữu những sản phẩm chất lượng của 360® với mức giá tốt nhất.',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Slider />

            {/* Best seller start */}

            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'c-12', 'm-12', 'l-12')}>
                        <h4 className={cx('content-heading')}>
                            sản phẩm bán chạy
                        </h4>
                    </div>
                    {listProductBestSeller.map((product, index) => (
                        <div
                            key={index}
                            className={cx('col', 'c-3', 'm-3', 'l-3')}
                        >
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Best seller end */}

            {/* new product start */}
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'c-12', 'm-12', 'l-12')}>
                        <h4 className={cx('content-heading')}>hàng mới về</h4>
                    </div>
                    {listProductNew.map((product, index) => (
                        <div
                            key={index}
                            className={cx('col', 'c-3', 'm-3', 'l-3')}
                        >
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
            {/* new product end */}

            {/* News  start*/}

            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'c-12', 'm-12', 'l-12')}>
                        <h4 className={cx('content-heading')}>tin tức</h4>
                    </div>
                    {listNews.map((news, index) => (
                        <div key={index} className={cx('col', 'l-4')}>
                            <div className={cx('news')}>
                                <img src={news.img} />
                                <div className={cx('content')}>
                                    <span>{news.dateUp}</span>
                                    <h3>{news.nameContent}</h3>
                                    <p>{news.nameContent}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News  end*/}
        </div>
    );
}

export default Home;
