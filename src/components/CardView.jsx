import React from 'react';
import '../App.css';
import '../Styles/Card2.css';
import Card2 from './Card2';

const Data = [
    {
        image: '그냥 사진',
        title: '데이터베이스',
        inner: '조대수 교수님',
        user: '글쓴 사람 이름',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진2',
        title: '소프트웨어공학',
        inner: '문미경 교수님',
        user: '글쓴 사람 이름2',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진3',
        title: '고급 프로그래밍',
        inner: '박승민 교수님',
        user: '글쓴 사람 이름3',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진4',
        title: '컴퓨터 구조',
        inner: '조대수 교수님',
        user: '글쓴 사람 이름4',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진5',
        title: '소프트웨어 기초 프로젝트',
        inner: '김선용 교수님',
        user: '글쓴 사람 이름5',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진6',
        title: '선형대수',
        inner: '고관표 교수님',
        user: '글쓴 사람 이름6',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진7',
        title: '자료구조 및 알고리즘',
        inner: '김동현 교수님',
        user: '글쓴 사람 이름7',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진8',
        title: '소프트웨어 개발실습',
        inner: '김요한 교수님',
        user: '글쓴 사람 이름8',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진9',
        title: '웹서버 프로그래밍',
        inner: '김동현 교수님',
        user: '글쓴 사람 이름9',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진10',
        title: '이산 수학',
        inner: '그냥 제목안에 들어간 내용10',
        user: '고관표 교수님',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진11',
        title: '소프트웨어 스튜디오',
        inner: '???',
        user: '글쓴 사람 이름11',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진12',
        title: '소프트웨어실무영어',
        inner: '???',
        user: '글쓴 사람 이름12',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },

    {
        image: '그냥 사진13',
        title: '오픈 소프트웨어실습',
        inner: '김동현 교수님',
        user: '글쓴 사람 이름13',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },
    {
        image: '그냥 사진13',
        title: '소프트웨어 학과탐색2',
        inner: '???',
        user: '글쓴 사람 이름13',
        likes: '⭐⭐️⭐️⭐️⭐️️',
    },
];

const CardView = (props) => {
    return Data.map((e, index) => {
        return (
            // <Card title={e.title} image={e.image} inner={e.inner} user={e.user} likes={e.likes} />
            <Card2 title={e.title} image={e.image} inner={e.inner} user={e.user} likes={e.likes} />
        );
    });
};

export default CardView;
