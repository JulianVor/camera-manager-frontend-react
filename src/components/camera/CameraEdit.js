import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Manufacturer from '../models/Manufacturer'; // Importiere die Klasse
import {mdiCameraPlus} from "@mdi/js";
import Icon from "@mdi/react";
import CameraEditForm from "./CameraEditForm";

export default function CameraEdit() {
    let { id } = useParams();

    if (typeof id === 'undefined') {
        return getCameraCreate();
    } else {
        return getCameraEdit(id);
    }

}

function getCameraCreate() {
    return (
        <div className="container">
            <h1>Create Camera</h1>
        </div>
    );
}


function getCameraEdit(id: string) {
    return (
        <div className="container">
            <CameraEditForm id={id}/>
        </div>
    );
}