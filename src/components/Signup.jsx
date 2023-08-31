import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../Styles/Signup.module.css';
import { Link, json } from 'react-router-dom';
// import { useState } from 'react';

function Signup(props) {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className={styles.body}>
                <div>
                    <form className={styles.form} action="/" method="post">
                        <h2 className={styles.h2}>회원가입</h2>
                        <div>
                            <input
                                className={styles.inputForm}
                                type="text"
                                id="username"
                                name="username"
                                placeholder="이름"
                                required
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputForm}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="이메일"
                                required
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputForm}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="비밀번호"
                                required
                            />
                        </div>
                        <div>
                            <input
                                className={styles.inputForm}
                                type="text"
                                id="div"
                                name="div"
                                placeholder="학과"
                                required
                            />
                        </div>
                        <br></br>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <label className={styles.label}>이미 아이디가 있으신가요?</label>
                        </Link>
                        <br></br>
                        <button type="submit" className={styles.btn}>
                            회원가입하기
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Signup;
