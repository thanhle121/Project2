import Styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(Styles);

function Search({ classNames }) {
    const [valueInput, setValueInput] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) setValueInput(e.target.value);
    };

    return (
        <div className={cx('header-search', classNames)}>
            <input
                value={valueInput}
                className={cx('header-input')}
                placeholder="Tìm kiếm sản phẩm"
                onChange={handleChange}
            ></input>

            <button className={cx('header-search--icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
        </div>
    );
}

export default Search;
