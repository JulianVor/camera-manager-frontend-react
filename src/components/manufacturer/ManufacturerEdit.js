import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Manufacturer from '../models/Manufacturer';
import ManufacturerEditForm from "./ManufacturerEditForm"; // Importiere die Klasse

export default function ManufacturerEdit() {
    let { id } = useParams();

    if (typeof id === 'undefined') {
        return getManufacturerCreate();
    } else {
        return getManufacturerEdit(id);
    }

}

function getManufacturerCreate() {
    return (
        <div className="container">
            <h1>Create Manufacturer</h1>
        </div>
    );
}


function getManufacturerEdit(id: string) {
    return (
        <div className="container">
            <ManufacturerEditForm id={id}/>
        </div>
    );
}