import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import {mdiCamera, mdiFilm} from '@mdi/js';

const getImageUrl = (image) =>  {
    if (typeof image !== 'undefined' && image !== null ) {
        return  'data:image/jpeg;base64,' + image;
    }
    return '';
}

const Fetch = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/cameras/all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPhotos(data);
            });
    }, []);
    return (
        <div>
            <table role="grid">
                <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                    <th>Mount</th>
                    <th>Serial Number</th>
                    <th>Camera Type</th>
                </tr>
                </thead>
                <tbody>{photos.map((camera, index) => (
                    <tr key={index}>
                        <td>{camera.manufacturer.name} {camera.name}</td>
                        <td><img src={getImageUrl(camera.manufacturer.logo)} alt="camera" className="row-logo"/></td>
                        <td>{camera.mount.manufacturer.name} {camera.mount.mount}</td>
                        <td>{camera.serialNumber}</td>
                        {/*<td>{camera.cameraType}</td>*/}
                        {camera.cameraType === 'ANALOG' ? (
                            <td><Icon path={mdiFilm} size={1}/></td>
                        ) : (
                            <td><Icon path={mdiCamera} size={1}/></td>
                        )}
                    </tr>
                ))}</tbody>

            </table>
        </div>
    );
};
export default Fetch;
