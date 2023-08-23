import React, { useState, useEffect } from 'react';
import styles from '../Styles/Signin.module.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const images = ['image1', 'image2', 'image3', 'image4'];

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <Header></Header>
            <div className={`${styles.loginContainer} ${styles[images[currentImageIndex]]}`}>
                <img
                    src="https://im.dongseo.ac.kr/resources/images/img_m_txt.png"
                    alt="Dongseo"
                    className={styles.img}
                ></img>

                <div className={styles.loginForm}>
                    <h2 className={styles.title}>로그인</h2>

                    <div>
                        <label className={styles.log}>ID: </label>
                        <br></br>
                        <input
                            type="text"
                            placeholder="아이디"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <div>
                        <label className={styles.log}>Password: </label>
                        <br></br>
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div>
                        <Link to="/signup">
                            <button>
                                <strong>회원가입</strong>
                            </button>
                        </Link>
                        <button type="submit">
                            <strong>로그인</strong>
                        </button>
                    </div>

                    <div className={styles.vline}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.title}>공지사항</h2>
                        </div>
                        <div className={styles.scrollContainer}>
                            <p>
                                본 사이트는 동서대학생들을 위한 수강 리뷰 사이트임 ㅎ 다른 학교
                                학생들은 못들어옴 ㅎ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Signin;
