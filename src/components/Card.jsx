import React from 'react';
import '../Styles/Card.css';

/**
 * 마우스를 대면 글이 올라가면서 안에 있느 작은글이 튀어나옴.
 *
 */

const Card = (props) => {
    return (
        <div className="card">
            <div className="image">
                <h1 name="img">{props.image}</h1>
            </div>

            <div className="content">
                <div className="title">{props.title}</div>
                <div className="inner">{props.inner}</div>
            </div>

            <div className="info">
                <span class="separator"></span>
            </div>
            <div className="user">
                <a href="#" className="userinfo">
                    {props.user}
                    <h1 className="img" alt="사진"></h1>
                </a>
                <span>
                    by <strong>작가</strong>
                </span>
            </div>

            <div className="likes">
                <p> {props.likes}</p>
            </div>
        </div>
    );
};

export default Card;
