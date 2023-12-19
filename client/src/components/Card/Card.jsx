import React from "react";
import "./Card.scss";
import {useNavigate} from "react-router-dom";

export const Card = ({data}) => {
    const navigate= useNavigate();
    return (
        <div className="card-container" onClick={()=>navigate(`/location/${data?.id}`)}>
            <img src={data?.image || "https://images.rosewoodhotels.com/is/image/rwhg/hi-hgv-26330925-rhgmodelbedroom-1"} alt="room1" />
            <div className="content">
                <h2>{data?.title || "title"}</h2>
                <h5>{data?.description || "description"}</h5>
            </div>
        </div>
    );
};
