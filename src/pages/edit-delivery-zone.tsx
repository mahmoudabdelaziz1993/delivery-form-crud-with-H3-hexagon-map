import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ZoneForm from "@/components/zone-form";
import type { DeliveryZone } from "@/lib/schemas/delivery-zone";
import { getZones, updateZone } from "@/lib/storage/delivery-zone";
import { useNavigate, useParams } from "react-router-dom";

export default function EditDeliveryZone() {
    const { id } = useParams();
    const navigate = useNavigate();

    const zone = getZones().find((z) => z.id === id);

    if (!zone) return <div>Zone not found</div>;



    const handleCreate = (values: DeliveryZone) => {
        updateZone(values);
        navigate("/");
    };
    return (
        <Card className="max-w-5xl mx-auto">
            <CardHeader>
                <CardTitle className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">Create Delivery Zone</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <ZoneForm onSubmit={handleCreate} defaultValues={zone}
                />

            </CardContent>


        </Card>
    );
}
