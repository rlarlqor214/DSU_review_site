import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './mainContainer';
import Pop_up from './Pop_up';
import { useEffect, useState } from 'react';

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="wrap">
            <Header></Header>
            <MainContainer></MainContainer>
            <Footer></Footer>
            <Pop_up isOpen={isModalOpen} closeModal={closeModal}>
                <h2>공지사항</h2>
                <p>여기 공지사항 입니다</p>
            </Pop_up>
        </div>
    );
};
export default Main;
