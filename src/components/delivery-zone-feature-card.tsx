import { Edit, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Link } from "react-router-dom"
import { deleteZone } from "@/lib/storage/delivery-zone"

interface Props {
    Title: string
    Description: string
    id: string
    onDelete?: () => void;
}
const DeliveryZoneFeatureCard: React.FC<Props> = ({ Title, Description, id, onDelete }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{Title}</CardTitle>
                <CardDescription>{Description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-end ">
                <ButtonGroup>
                    <Button size={'icon'} variant={'secondary'} >
                        <Link to={`/delivery-zone/edit/${id}`}>

                            <Edit />

                        </Link>
                    </Button>
                    <Button size={'icon'} variant={'destructive'} onClick={
                        () => {
                            deleteZone(id)
                            if (onDelete) onDelete(); // Call the callback instead of reload
                        }}>
                        <Trash />
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )

}
export default DeliveryZoneFeatureCard