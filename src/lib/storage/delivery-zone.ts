import type { DeliveryZone } from "../schemas/delivery-zone";


const STORAGE_KEY = "delivery_zones";

export function getZones(): DeliveryZone[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveZones(zones: DeliveryZone[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(zones));
}

export function createZone(zone: DeliveryZone) {
    const zones = getZones();
    saveZones([...zones, zone]);
}

export function updateZone(updated: DeliveryZone) {
    const zones = getZones();
    const newZones = zones.map((z) =>
        z.id === updated.id ? updated : z
    );
    saveZones(newZones);
}
// delete zone

export function deleteZone(id: string) {
    const zones = getZones();
    const newZones = zones.filter((z) => z.id !== id);
    saveZones(newZones);
}