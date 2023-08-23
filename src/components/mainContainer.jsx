import React from 'react';
import '../App.css';
import CardView from './CardView';

const MainContainer = () => {
    return (
        <div className="wrap">
            <div className="main">
                <aside className="leftaside">
                    <div className="left">
                        <h1 className="leftaside_content">헐</h1>
                        <h1 className="leftaside_content">헐</h1>
                        <h1 className="leftaside_content">헐</h1>
                        <h1 className="leftaside_content">헐</h1>
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
