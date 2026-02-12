import DeliveryZoneFeatureCard from "@/components/delivery-zone-feature-card"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const DeliveryZone: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Delivery Zone</CardTitle>
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
                    <Button>
                        Create Delivery Zone
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
export default DeliveryZone