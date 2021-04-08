import React from 'react';
import { useHistory } from 'react-router';
import './Details.css';

const Details = ({ details }) => {
    const history = useHistory();
    const handleBuy = (name) => {
        history.push(`/checkout/${details._id}`);
    }
    return (
        <div className="mt-3 col-md-3 mx-2 pb-3">
            <div>
                <div className="p-3">
                    <div className="card cartVehicle">
                        <div className="d-flex justify-content-center">
                            <img src={details.imgUrl} className="" alt="" />
                        </div>
                        <div className="card-body text-dark text-center">
                            <p className="card-text text-center"><strong>{details.name}</strong></p>
                            <p className="text-center">{details.author}</p>
                            <div className="d-flex justify-content-around">
                                <h3>${details.price}</h3>
                                <button className="btn btn-success" onClick={() => handleBuy(details.name)}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;