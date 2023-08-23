import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './mainContainer';

const Main = () => {
    return (
        <div className="wrap">
            <Header></Header>
            <MainContainer></MainContainer>
            <Footer></Footer>
        </div>
    );
};
export default Main;
