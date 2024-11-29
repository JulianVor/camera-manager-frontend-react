import React, { useState, useEffect } from 'react';
import Manufacturer from '../models/Manufacturer';

const getImageUrl = (image) =>  {
    if (typeof image !== 'undefined' && image !== null ) {
        return  'data:image/jpeg;base64,' + image;
    }
    return '';
}

const manufacturerData = new Manufacturer(0, '', undefined);

const DataForm = ({ id }) => {
    const [manufacturer, setManufacturer] = useState(manufacturerData);

    useEffect(() => {
        fetch('http://localhost:8080/manufacturer/' + id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setManufacturer(data);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManufacturer(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [imageToShow, setImageToShow] = useState('');

    useEffect(() => {
        if (manufacturer && manufacturer.logo) {
            setImageToShow(getImageUrl(manufacturer.logo));
        }
    }, [manufacturer]);

    const onFileSelected = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageToShow(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const navigateBack = () => {
        // Implement your navigation logic here
    };
    return (
        <div>
            <div className="control">
                {/* <label htmlFor="name">Name</label> */}
                <input
                    value={manufacturer.name}
                    id="name"
                    placeholder="Name"
                    aria-label="Name"
                    type="text"
                />
            </div>

            <div className="grid image-container">
                <input type="file" onChange={onFileSelected} />
                {imageToShow && (
                    <img src={imageToShow} alt="Imagevc" className="edit-logo" />
                )}
            </div>

            <div className="buttons">
                <button type="submit">
                    Change
                </button>
                <button type="button" onClick={navigateBack}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default DataForm;