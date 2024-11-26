import React from 'react';
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <nav className="container">
                <ul>
                    <li><strong>Camera Manager</strong></li>
                </ul>
                <ul>
                    <li><Link to="/cameras">Cameras</Link></li>
                    <li><Link to="/manufacturers">Manufacturers</Link></li>
                    {/*<li><a>Mount</a></li>*/}
                </ul>
            </nav>
        </div>
    );
}