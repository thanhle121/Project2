import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(Styles);

function OptionItem({ value }) {
    return (
        <Button className={cx('option-sale')}>
            {value.priceSale
                ? 'Sale đồng giá ' + value.priceSale + 'k'
                : 'Sale ' + value.numberPercentSale + '%'}
        </Button>
    );
}

export default OptionItem;
