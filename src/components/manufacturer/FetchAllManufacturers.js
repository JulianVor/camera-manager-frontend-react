import React, { useState, useEffect } from 'react';
import Grid from "../objects/grid/Grid";

const Fetch = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/manufacturer/all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPhotos(data);
            });
    }, []);
    const dataObjects = photos.map(item => ({
        index: item.id,
        img: item.logo,
        name: item.name
    }));
    return (<Grid dataObjects={dataObjects}/>);
};
export default Fetch;
