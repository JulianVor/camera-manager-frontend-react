import React from 'react';
import FetchAllCameras from "./FetchAllCameras";
import {Link} from "react-router-dom";
import {mdiCameraPlus} from "@mdi/js";
import Icon from "@mdi/react";

export default function CameraOverview() {
    return (
        <div className="container">
            {/*<h1>Camera <button className="btn-minimal material-icons"></button></h1>*/}
            <h1>Camera <Link className="btn-minimal" to="/cameras/create"><Icon path={mdiCameraPlus} size={1}/></Link></h1>

            <div><FetchAllCameras/>
            </div>
        </div>
    );
}