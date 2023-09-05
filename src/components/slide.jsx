import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import '../App.css';

const User = ({}) => {
    const [translateX, setTranslateX] = useState(-610);

    const slideLeft = (e) => {
        console.log(e.target.classList);
        e.target.classList.toggle('active');
        const slideCount = document.getElementsByClassName('slide').length;
        if (translateX < -610) {
            setTranslateX(translateX + 1220);
        } else {
            setTranslateX(-610 - 1220 * (slideCount - 1));
        }
    };

    const slideRight = () => {
        const slideCount = document.getElementsByClassName('slide').length;
        if (-610 - 1220 * (slideCount - 1) < translateX) {
            setTranslateX(translateX - 1220);
        } else {
            setTranslateX(-610);
        }
    };

    useEffect(() => {
        console.log(translateX);
        const target = document.getElementsByClassName('slidewrap')[0];
        target.style.translate = `${translateX}px 0`;
    }, [translateX]);
    return (
        <div className="wrap">
            <button className="Btn prev" onClick={slideLeft}>
                <svg viewBox="0 0 64 64" className="icon">
                    <path
                        className="path"
                        d="M41.4141 54.4143C40.633 55.1953 39.3667 55.1953 38.5857 54.4143L17.5856 33.4142C16.8046 32.6332 16.8046 31.3668 17.5856 30.5858L38.5857 9.58573C39.3667 8.80468 40.633 8.80468 41.4141 9.58573C42.1951 10.3668 42.1951 11.6331 41.4141 12.4142L21.8283 32L41.4141 51.5858C42.1951 52.3669 42.1951 53.6332 41.4141 54.4143Z"
                    ></path>
                </svg>
            </button>
            <button className="Btn next" onClick={slideRight}>
                <svg viewBox="0 0 64 64" className="icon">
                    <path
                        className="path"
                        d="M41.4141 54.4143C40.633 55.1953 39.3667 55.1953 38.5857 54.4143L17.5856 33.4142C16.8046 32.6332 16.8046 31.3668 17.5856 30.5858L38.5857 9.58573C39.3667 8.80468 40.633 8.80468 41.4141 9.58573C42.1951 10.3668 42.1951 11.6331 41.4141 12.4142L21.8283 32L41.4141 51.5858C42.1951 52.3669 42.1951 53.6332 41.4141 54.4143Z"
                    ></path>
                </svg>
            </button>
            <div className="slidewrap">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>

                {/* <div className="container_main">
                    <ul class="list">
                        <li class="item">
                            <img class="img"></img>
                            <div className="content">
                                <p>강의명</p>
                                <p>김로켓교수님</p>
                            </div>
                        </li>

                        <li class="item">
                            <img class="img"></img>
                            <div className="content">
                                <p>강의명</p>
                                <p>김로켓교수님</p>
                            </div>
                        </li>
                    </ul>
                    <button class="prev">
                        <svg viewBox="0 0 64 64" class="icon">
                            <path
                                class="path"
                                d="M41.4141 54.4143C40.633 55.1953 39.3667 55.1953 38.5857 54.4143L17.5856 33.4142C16.8046 32.6332 16.8046 31.3668 17.5856 30.5858L38.5857 9.58573C39.3667 8.80468 40.633 8.80468 41.4141 9.58573C42.1951 10.3668 42.1951 11.6331 41.4141 12.4142L21.8283 32L41.4141 51.5858C42.1951 52.3669 42.1951 53.6332 41.4141 54.4143Z"
                            ></path>
                        </svg>
                    </button>

                    <button class="prev">
                        <svg viewBox="0 0 64 64" class="icon">
                            <path
                                class="path"
                                d="M22.5859 9.58573C23.367 8.80468 24.6333 8.80468 25.4143 9.58573L46.4144 30.5858C47.1954 31.3668 47.1954 32.6332 46.4144 33.4142L25.4143 54.4143C24.6333 55.1953 23.367 55.1953 22.5859 54.4143C21.8049 53.6332 21.8049 52.3669 22.5859 51.5858L42.1717 32L22.5859 12.4142C21.8049 11.6331 21.8049 10.3668 22.5859 9.58573Z"
                            ></path>
                        </svg>
                    </button>

                    {/* <button class="next">
                    <svg viewBox="0 0 64 64" class="icon">
                        <path
                            class="path"
                            d="M41.4141 54.4143C40.633 55.1953 39.3667 55.1953 38.5857 54.4143L17.5856 33.4142C16.8046 32.6332 16.8046 31.3668 17.5856 30.5858L38.5857 9.58573C39.3667 8.80468 40.633 8.80468 41.4141 9.58573C42.1951 10.3668 42.1951 11.6331 41.4141 12.4142L21.8283 32L41.4141 51.5858C42.1951 52.3669 42.1951 53.6332 41.4141 54.4143Z"
                        ></path>
                    </svg>
                </button> */}
            </div>
        </div>
    );
};

export default User;
