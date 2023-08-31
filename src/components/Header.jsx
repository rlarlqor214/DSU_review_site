import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Signin from './Signin';

function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    const signOut = () => {
        dispatch({
            type: 'CLEAR_TOKEN',
        });
        alert('로그아웃 되었습니다.');
        window.location.replace('/');
    };

    useEffect(() => {
        console.log('!!!:', token);
    }, [token]);

    return (
        <div className={styles.header}>
            <Link to="/main">
                <img
                    className={styles.img}
                    src="https://user-images.githubusercontent.com/76634341/215338313-34991d4d-4899-45e6-9b02-4f64dae14d06.png"
                    alt="Dongseo"
                />
            </Link>
            <div className={styles.titlecontainer}>
                <h1 className={styles.title}>동서대학교 수강 리뷰 시스템</h1>
            </div>
            {token && (
                <button id="logOut" onClick={signOut} disabled={token === false}>
                    로그아웃하기
                </button>
            )}
        </div>
    );
}

export default Header;
