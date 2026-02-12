import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import H3MapSelector from "@/components/h3-map-selector";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function CreateDeliveryZone() {
    const [name, setName] = useState("");
    const [selectedHexes, setSelectedHexes] = useState<string[]>([]);

    const handleSubmit = () => {
        const payload = {
            name,
            hexagons: selectedHexes,
        };

        console.log(payload);

        // TODO: send to backend
    };

    return (
        <Card className="max-w-5xl mx-auto">
            <CardHeader>
                <CardTitle className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">Create Delivery Zone</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <Input
                    placeholder="Zone Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div>
                    <p className="mb-2 font-medium">
                        Select Delivery Area ({selectedHexes.length} selected)
                    </p>

                    <H3MapSelector
                        value={selectedHexes}
                        onChange={setSelectedHexes}
                    />
                </div>
            </CardContent>

            <CardFooter className="justify-end gap-2">
                <Button onClick={handleSubmit}>
                    Save Zone
                </Button>
                <Link to="/delivery-zone">
                    <Button variant={'secondary'}><X /> Close</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
