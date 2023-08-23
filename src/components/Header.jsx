import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Link to="/">
                <img
                    className={styles.img}
                    src="https://user-images.githubusercontent.com/76634341/215338313-34991d4d-4899-45e6-9b02-4f64dae14d06.png"
                    alt="Dongseo"
                />
            </Link>
            <div className={styles.titlecontainer}>
                <h1 className={styles.title}>동서대학교 수강 리뷰 시스템</h1>
            </div>
        </div>
    );
}

export default Header;
