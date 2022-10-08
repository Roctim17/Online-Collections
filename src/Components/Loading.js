import React from 'react';
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
    return (
        <div >
              <div className="spinner-grow" role="status">
                
                    <span className="visually-hidden"><Skeleton>Loading...</Skeleton></span>
                </div>
        </div>
    );
};

export default Loading;