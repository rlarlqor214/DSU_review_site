import React from 'react';
import '../App.css';
import CardView from './CardView';

const MainContainer = () => {
    return (
        <div className="wrap">
            <div className="main">
                <aside className="leftaside">
                    <div className="left">
                        <h1 className="leftaside_content">공지</h1>
                        <h1 className="leftaside_content">메인</h1>
                        <h1 className="leftaside_content">수강후기</h1>
                        <h1 className="leftaside_content">마이페이지</h1>
                    </div>
                </aside>
                <div className="card_container">
                    <CardView></CardView>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
