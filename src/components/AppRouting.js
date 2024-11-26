import React from 'react';
import { Routes, Route } from "react-router-dom";
import CameraOverview from "./camera/CameraOverview";
import ManufacturerOverview from "./manufacturer/ManufacturerOverview";

class AppRouting extends React.Component {

    render() {
        return (
            <Routes>
                <Route index element={<CameraOverview />} />

                <Route path="cameras/*" element={<CameraOverview />} />
                <Route path="manufacturers/*" element={<ManufacturerOverview />} />
                {/*<Route path="login/*" element={<Login />} />*/}
                {/*<Route path="signup/*" element={<Signup />} />*/}

                {/*<Route path="contact/*" element={<Contact />} />*/}

                <Route path="*" element={<CameraOverview />} />

            </Routes>
        )
    }

}

export default AppRouting;