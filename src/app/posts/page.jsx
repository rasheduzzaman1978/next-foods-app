import React, { Suspense } from 'react';
import Posts from '../component/Post/Posts';

const PostsPage = () => {

    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());

    return (
        <div>
            <Suspense fallback={<div className='text-3xl'>Loading posts...</div>}>
                <Posts postPromise={postPromise} />
            </Suspense>        
        </div>
    );
};

export default PostsPage;