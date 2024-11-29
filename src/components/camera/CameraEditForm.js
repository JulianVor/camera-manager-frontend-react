import React, { useState, useEffect } from 'react';
import Manufacturer from '../models/Manufacturer';
import Camera from "../models/Camera";
import Mount from "../models/Mount";

const manufacturerData = new Manufacturer(0, '', undefined);
const mountData = new Mount(0, '', manufacturerData);
const cameraData = new Camera(0, manufacturerData, mountData, '', '','');

const DataForm = ({ id }) => {
    const [camera, setCamera] = useState(cameraData);

    useEffect(() => {
        fetch('http://localhost:8080/cameras/' + id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setCamera(data);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCamera(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <h1>Edit Camera {camera.name} {camera.manufacturer.name}</h1>
        </div>
    );
};

export default DataForm;