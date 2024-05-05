import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '~/components';

const cx = classNames.bind(Styles);

function MenuItem({ value }) {
    return (
        <div className={cx('product-container')}>
            <h3>{value.content}</h3>
            <ul>
                {value.type.map((product, index) => (
                    <li key={index}>
                        <Button
                            className={cx('product-item')}
                            leftIcon={<FontAwesomeIcon icon={product.icon} />}
                        >
                            {product.describe}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuItem;
