import Styles from './product.module.scss';
import classNames from 'classnames/bind';

import { Button, ProductItem } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faBackward,
    faDiagramNext,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(Styles);

function Product() {
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

    const numberPages = [
        {
            numberPage: 1,
        },
        {
            numberPage: 2,
        },
        {
            numberPage: 3,
        },
        {
            numberPage: 4,
        },
        {
            numberPage: 5,
        },
        {
            numberPage: 6,
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [listProduct, setListProduct] = useState([]);

    const handleClick = (index) => {
        setCurrentPage(index);
    };

    useEffect(() => {
        fetch(`http://localhost:3333/products`)
            .catch(() => {
                return setListProduct([]);
            })
            .then((response) => {
                return response.json();
            })

            .then((listProduct) => {
                return setListProduct(listProduct);
            });
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                {listProduct.map((product, index) => {
                    return (
                        <div key={index} className={cx('col', 'l-3')}>
                            <ProductItem product={product} />
                        </div>
                    );
                })}
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-12')}>
                    <div className={cx('pagination')}>
                        <Button className={cx('prev-page')}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </Button>
                        {numberPages.map((page, index) => {
                            if (numberPages.length > 5) {
                            }
                            return (
                                <Button
                                    key={index}
                                    className={cx('page-number', {
                                        active: index === currentPage,
                                    })}
                                    onClick={() => handleClick(index)}
                                >
                                    {page.numberPage}
                                </Button>
                            );
                        })}
                        <Button className={cx('next-page')}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;
