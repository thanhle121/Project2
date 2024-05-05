import Styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { Button, Image } from '~/components';
const cx = classNames.bind(Styles);

function ProductItem({ product }) {
    const isSale = !!product.prices.priceCompetitive;
    return (
        <div className={cx('wrapper')}>
            <Button>
                <Image className={cx('product-img')} src={product.img} />

                <div className={cx('content')}>
                    <span className={cx('name')}>{product.name}</span>
                    <div className={cx('price')}>
                        <p className={cx('price-default', { del: isSale })}>
                            {product.prices.priceDefault + '.000 Đ'}
                        </p>
                        {isSale ? (
                            <p className={cx('price-competitive')}>
                                {product.prices.priceCompetitive + '.000 Đ'}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </Button>
            {isSale ? (
                <div className={cx('sale-off')}>
                    <span>Giảm giá!</span>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default ProductItem;
