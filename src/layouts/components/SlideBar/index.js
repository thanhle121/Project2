import styles from './SlideBar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components';

const cx = classNames.bind(styles);

function SlideBar() {
    const newPosts = [
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=70&h=70&zc=1&q=90',
            name: 'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            dateUp: '04/08/2022',
        },
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=70&h=70&zc=1&q=90',
            name: 'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            dateUp: '04/08/2022',
        },
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=70&h=70&zc=1&q=90',
            name: 'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            dateUp: '04/08/2022',
        },
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=70&h=70&zc=1&q=90',
            name: 'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            dateUp: '04/08/2022',
        },
        {
            img: 'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/08/DSC01373-copy.jpg&w=70&h=70&zc=1&q=90',
            name: 'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
            dateUp: '04/08/2022',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('new-posts')}>
                <h3>BÀI VIẾT MỚI NHẤT</h3>
                {newPosts.map((newPost, index) => (
                    <div key={index} className={cx('new-post')}>
                        <img src={newPost.img} />
                        <div className={cx('new-post--content')}>
                            <h5>{newPost.name}</h5>
                            <span>{newPost.dateUp}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideBar;
