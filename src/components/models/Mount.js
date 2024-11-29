import type Manufacturer from "./Manufacturer";

class Mount {
    constructor(id: number, mount: string, manufacturer: Manufacturer) {
        this.id = id;
        this.mount = mount;
        this.manufacturer = manufacturer;
    }
}

export default Mount;