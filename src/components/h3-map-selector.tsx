"use client";

import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo, useState } from "react";
import * as h3 from "h3-js";

const CENTER: [number, number] = [30.0444, 31.2357];
const RESOLUTION = 9;

interface Props {
    value: string[];
    onChange: (hexes: string[]) => void;
}

export default function H3MapSelector({ value, onChange }: Props) {
    const [neighbors, setNeighbors] = useState<string[]>([]);

    const hexagons = useMemo(() => {
        const centerIndex = h3.latLngToCell(CENTER[0], CENTER[1], RESOLUTION);
        return h3.gridDisk(centerIndex, 8);
    }, []);

    const handleClick = (hex: string) => {
        let updated;

        if (value.includes(hex)) {
            updated = value.filter((h) => h !== hex);
        } else {
            updated = [...value, hex];
        }

        onChange(updated);

        const n = h3.gridDisk(hex, 1);
        setNeighbors(n.filter((h) => h !== hex));
    };

    return (
        <MapContainer
            center={CENTER}
            zoom={13}
            style={{ height: "400px", borderRadius: "12px" }}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {hexagons.map((hex) => {
                const boundary = h3.cellToBoundary(hex, true).map(
                    ([lat, lng]) => [lat, lng] as [number, number]
                );
                const isSelected = value.includes(hex);
                const isNeighbor = neighbors.includes(hex);

                let color = "#3388ff";

                if (isSelected) color = "purple";
                else if (isNeighbor) color = "orange";

                return (
                    <Polygon
                        key={hex}
                        positions={boundary}
                        pathOptions={{ color, fillOpacity: 0.5 }}
                        eventHandlers={{
                            click: () => handleClick(hex),
                        }}
                    />
                );
            })}
        </MapContainer>
    );
}
