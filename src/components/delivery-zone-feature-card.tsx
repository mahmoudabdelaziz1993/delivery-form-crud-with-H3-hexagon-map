import { Edit, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface Props {
    Title: string
    Description: string
    id: string
}
const DeliveryZoneFeatureCard: React.FC<Props> = ({ Title, Description }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{Title}</CardTitle>
                <CardDescription>{Description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <ButtonGroup>
                    <Button size={'icon'} variant={'secondary'} >
                        <Edit />
                    </Button>
                    <Button size={'icon'} variant={'destructive'}>
                        <Trash />
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )

}
export default DeliveryZoneFeatureCard