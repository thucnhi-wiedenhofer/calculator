import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const SaveCalcul = () => {
    const { post } = useContext(NumberContext);
    if(post!== null){
        return(<div>{post.operation} {post.result}</div>)
    }
};
export default SaveCalcul;