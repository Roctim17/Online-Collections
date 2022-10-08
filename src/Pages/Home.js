import React from 'react';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark border-0">
                <img src="https://blog-assets.freshworks.com/freshsales-crm/wp-content/uploads/2018/11/Banner_002.png" className="card-img" alt="..." 
                height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON</h5>
                    <p className="card-text lead fw-bold fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;