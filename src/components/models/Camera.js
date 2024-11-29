import type Manufacturer from "./Manufacturer";
import type Mount from "./Mount";

class Camera {
    constructor(id: number, manufacturer: Manufacturer, mount: Mount, name: string, serialNumber: string, cameraType: string) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.mount = mount;
        this.name = name;
        this.serialNumber = serialNumber;
        this.cameraType = cameraType;
    }
}

export default Camera;