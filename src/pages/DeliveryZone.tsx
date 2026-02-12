import DeliveryZoneFeatureCard from "@/components/delivery-zone-feature-card"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { DeliveryZone } from "@/lib/schemas/delivery-zone"
import { getZones } from "@/lib/storage/delivery-zone"
import { MapPlus } from "lucide-react"
import { useCallback, useState } from "react"
import { Link } from "react-router-dom"

const DeliveryZoneList: React.FC = () => {
    const [zones, setZones] = useState<DeliveryZone[]>(() => getZones());

    const refreshZones = useCallback(() => {
        setZones(getZones());
    }, []);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Delivery Zone</CardTitle>
                <CardDescription>manage your delivery zone </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 ">
                    {zones.map(({ id, hexagons, name }) => (
                        <DeliveryZoneFeatureCard key={id} Title={name} Description={`${hexagons.length} selected zones`} id={id} onDelete={refreshZones} />
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <ButtonGroup>
                    <Link to="/create-delivery-zone">
                        <Button>
                            <MapPlus />
                            Create Delivery Zone
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
export default DeliveryZoneList