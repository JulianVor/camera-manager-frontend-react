import React from 'react';
import FetchAllManufacturers from "./FetchAllManufacturers";
import {Link} from "react-router-dom";
import Icon from "@mdi/react";
import {mdiDomainPlus} from "@mdi/js";

export default function ManufacturerOverview() {
    return (
        <div className="container">
            <h1>Manufacturer <Link className="btn-minimal" to="/manufacturers/create"><Icon path={mdiDomainPlus} size={1}/></Link>
            </h1>

            <FetchAllManufacturers/>
        </div>

    );
}