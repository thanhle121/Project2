import Styles from './login.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import { useState } from 'react';

const cx = classNames.bind(Styles);

function Login() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        console.log(values);
        if (values.username.trim() === '')
            errors.username = 'Vui lòng nhập tên đăng nhập';
        if (values.password.trim() === '')
            errors.password = 'Vui lòng nhập trường mật khẩu';

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formValues));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (!value.startsWith(' ')) {
            setFormValues({ ...formValues, [name]: value });
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={cx('wrapper')}>
                <div className={cx('field')}>
                    <label>Tên tài khoản</label>
                    <div className={cx('container-input')}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Nhập tên tài khoản"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p className={cx('status')}>{formErrors.username}</p>
                </div>
                <div className={cx('field')}>
                    <label>Mật khẩu của bạn</label>
                    <div className={cx('container-input')}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className={cx('status')}>{formErrors.password}</p>
                </div>
                <Button primary className={cx('btn-submit')}>
                    Đăng nhập
                </Button>
            </div>
        </form>
    );
}

export default Login;
