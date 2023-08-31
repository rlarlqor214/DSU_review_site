import React from 'react';
import styles from '../Styles/Signin.module.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Signin() {
    const images = ['image1', 'image2', 'image3', 'image4'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const Data = {
        id: 'amazon7737',
        password: '1234',
    };
    // 로그인 데이터 정의
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // 상태유지
    const Myfunction = () => {
        // setStatus(true);
        dispatch({
            type: 'SET_TOKEN',
            payload: true,
        }); // console.log('!!!:', status);
    };

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    // 로그인데이터 관리

    const inputIdHandler = (e) => {
        setId(e.target.value);
    };

    const inputPassHandler = (e) => {
        setPassword(e.target.value);
    };

    // 로그인 처리

    const signIn = () => {
        const userData = {
            userId: id,
            userPassword: password,
        };

        try {
            console.log('userData:', userData);
            if (userData.userId === Data.id && userData.userPassword === Data.password) {
                Myfunction();
                alert('로그인 확인되었습니다.');
                window.location.replace('/main');
            } else {
                alert('아이디 또는 비밀번호를 확인해주세요.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    // 로그아웃 처리

    const signOut = () => {
        dispatch({
            type: 'CLEAR_TOKEN',
        });
        if (token === true) {
            alert('로그아웃 되었습니다.');
        }
    };

    useEffect(() => {
        console.log('!!!:', token);
    }, [token]);

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
                            onChange={inputIdHandler}
                            placeholder="아이디를 입력하세요"
                        />
                    </div>

                    <div>
                        <label className={styles.log}>Password: </label>
                        <br></br>
                        <input
                            type="text"
                            onChange={inputPassHandler}
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>

                    <div>
                        <Link to="/signup">
                            <button>
                                <strong>회원가입</strong>
                            </button>
                        </Link>
                        <button onClick={signIn}>로그인하기</button>
                    </div>

                    <div className={styles.vline}>
                        <div className={styles.contentContainer}>
                            <h2 className={styles.title}>공지사항</h2>
                        </div>
                        <div className={styles.scrollContainer}>
                            <p>동서대학교 수강 후기 글을 모아놓은 수강 후기 사이트 입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Signin;
