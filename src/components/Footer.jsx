import React from 'react';
import styles from '../Styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <address className={styles.copyright}>
                <p>
                    <span>(우)47011 부산광역시 사상구 주례로 47 (주례동) 동서대학교</span>
                    <span>TEL : 051-313-2001~4</span>
                    <span>FAX : 051-313-1046</span>
                </p>
                <p>Copyright © 2023 by Dongseo University. All rights reserved.</p>
            </address>
        </footer>
    );
}

export default Footer;
