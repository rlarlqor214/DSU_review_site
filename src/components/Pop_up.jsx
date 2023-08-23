import React, { useState } from 'react';
// import Modal from "react-modal";
import Styles from '../Styles/Pop_up.css';

function Pop_up({ isOpen, children, closeModal }) {
    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div
                // className="background"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                }}
            ></div>
            <div
                // className="popupWrapper"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 700,
                    maxWidth: '100%',
                    maxHeight: '90%',
                    overflowY: 'auto',
                    backgroundColor: 'white',
                }}
            >
                <div className="notice">{children}</div>
                <div className="closeWrapper">
                    <button className="closeToday">
                        하루 열지 않기
                        {/* onClick={closeTodayPop} */}
                    </button>
                    <button className="closeBtn" onClick={closeModal}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Pop_up;
