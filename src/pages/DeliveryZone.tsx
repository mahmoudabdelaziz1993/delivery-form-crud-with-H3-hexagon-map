import DeliveryZoneFeatureCard from "@/components/delivery-zone-feature-card"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPlus } from "lucide-react"
import { Link } from "react-router-dom"

const DeliveryZone: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Delivery Zone</CardTitle>
                <CardDescription>manage your delivery zone </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 ">
                    {Array(5).fill({
                        title: "Delivery Zone",
                        description: "Delivery Zone Description",
                        id: "1"

                    }).map(({ title, description, id }, i) => (
                        <DeliveryZoneFeatureCard key={i} Title={title} Description={description} id={id} />
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
export default DeliveryZone