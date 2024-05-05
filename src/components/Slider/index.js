import Styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { Image } from '~/components';
import { faL } from '@fortawesome/free-solid-svg-icons';
import ButtonSlider from './ButtonSlider';
const cx = classNames.bind(Styles);

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderContainer = useRef();
    const sliderContentRef = useRef();
    const sliderImages = [
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/08/Web.jpg',
            to: '/sales',
        },
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/11/Banner-web-BST-No-more.jpg',
        },
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/12/Banner-web-2.jpg',
        },
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/11/Banner-web-BST-No-more.jpg',
        },
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/06/Web.jpg',
        },
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/06/Banner-web.png',
        },
    ];

    //variable

    let isDragStart = false;
    let isDragging = false;
    let prevPageX = 0;
    let prevScrollLeft = 0;
    let positionDiff = 0;

    // function

    useEffect(() => {
        sliderContainer.current.scrollLeft =
            sliderContentRef.current.clientWidth * currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevCurrentIndex) => {
                console.log(prevCurrentIndex);
                return sliderImages.length - 1 == prevCurrentIndex
                    ? 0
                    : prevCurrentIndex + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const autoDrag = (e) => {
        if (
            sliderContainer.current.scrollLeft ==
            sliderContainer.current.scrollWidth -
                sliderContainer.current.clientWidth
        )
            return;
        positionDiff = e.pageX - prevPageX;
        positionDiff = Math.abs(positionDiff);

        let slideContentWidth = sliderContentRef.current.clientWidth;
        console.log(slideContentWidth);
        let valDifferent = slideContentWidth - positionDiff;
        console.log(valDifferent);
        if (sliderContainer.current.scrollLeft > prevScrollLeft) {
            return (sliderContainer.current.scrollLeft +=
                positionDiff > 8 ? valDifferent : -positionDiff);
        }

        sliderContainer.current.scrollLeft -=
            positionDiff > 8 ? valDifferent : -positionDiff;
    };

    const handleMouseUp = (e) => {
        isDragStart = false;
        if (!isDragging) return;
        isDragging = false;
        autoDrag(e);
    };

    const handleMouseMove = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        positionDiff = e.pageX - prevPageX;
        sliderContainer.current.scrollLeft = prevScrollLeft - positionDiff;
    };
    const handleMouseDown = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = sliderContainer.current.scrollLeft;
    };

    const handleMouseLeave = (e) => {
        isDragStart = false;
        if (!isDragging) return;
        isDragging = false;
        autoDrag(e);
    };

    return (
        <div className={cx('slider-wrapper')}>
            <div
                className={cx('slider-container')}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUp={(e) => handleMouseUp(e)}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
                ref={sliderContainer}
            >
                {sliderImages.map((sliderImage, index) => {
                    return (
                        <div
                            ref={sliderContentRef}
                            key={index}
                            className={cx('slider-content')}
                        >
                            <a>
                                <Image
                                    className={cx('slider-img')}
                                    src={sliderImage.src}
                                />
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className={cx('dots')}>
                {sliderImages.map((sliderImage, index) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrentIndex(index);
                            }}
                            key={index}
                            className={cx('dot', {
                                active: currentIndex == index,
                            })}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;
