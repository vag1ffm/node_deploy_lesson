import React from 'react';

const Loading = ({word, user, isLoading, error}) => {
    return (
        <span className={isLoading? "loading" : ''}>
            {word}
            {isLoading && "aaaaaaa"}
            {user}
            {error && "Error"}
        </span>
    );
};

export default Loading;