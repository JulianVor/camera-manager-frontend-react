import React from 'react';
import './GridTile.css';
import GridTile from "./GridTile";

const getImageUrl = (image) =>  {
    if (typeof image !== 'undefined' && image !== null ) {
        return  'data:image/jpeg;base64,' + image;
    }
    return '';
}

export default function Grid({ dataObjects }) {
    return (
        <div className="grid">{dataObjects.map((data, index) => (
            <GridTile index={data.index} img={getImageUrl(data.img)} name={data.name}/>))}
        </div>

    );
}