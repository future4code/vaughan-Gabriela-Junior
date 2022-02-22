import React from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData';

const PostCard = () => {
    const params = useParams();

    const post = useRequestData({}, `${baseURL}/posts/${params.id}/comments`)

    console.log(post)
    // console.log(params)

    return (
        <div>

        </div>
    );
};

export default PostCard;
