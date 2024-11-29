import React from 'react';
import Icon from "@mdi/react";
import {mdiCamera} from "@mdi/js";
import './GridTile.css';
import {useNavigate} from "react-router-dom";

export default function GridTile({ index, img, name }) {
    const navigate = useNavigate();
    const handleRowClick = (id) => {
        navigate(`edit/${id}`);
    };
    return (
        <div className="centered-container" key={index} onClick={() => handleRowClick(index)} style={{ cursor: 'pointer' }}>
            <div className="grid-button outline" >

                {img !== "" ? (
                    <img src={img} alt={name}/>
                ) : (
                    <Icon path={mdiCamera} size={1}/>
                )}

            </div>
            <h2>{name}</h2>
        </div>

    );
}