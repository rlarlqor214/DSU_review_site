import React from 'react';
import '../Styles/Card2.css';

const Card2 = (props) => {
    return (
        <div class="card">
            <div class="content">
                <h2 class="title">{props.title}</h2>
                <p class="copy">{props.inner}</p>
                <button class="btn">{props.likes}</button>
            </div>
        </div>
    );
};

export default Card2;
