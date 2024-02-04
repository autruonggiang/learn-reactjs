import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Loi Choi',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/4/5/5/d4550ceb39ea8e5806f87e948e4c5ef2.jpg'
        },
        {
            id: 2,
            name: 'Chuyện cũ bỏ qua',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/4/6/e/946e9e6bb4afac7fa921d712cc18dfa2.jpg'
        },
        {
            id: 3,
            name: 'The Spectre',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/covers/4/c/4c249c38da58d5f2b85852c6e64a2fd0_1505410209.jpg'
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ yêu thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;