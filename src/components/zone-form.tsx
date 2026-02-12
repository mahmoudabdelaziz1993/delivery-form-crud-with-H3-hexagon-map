import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    deliveryZoneSchema,
    type DeliveryZone,
} from "@/lib/schemas/delivery-zone";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import H3MapSelector from "@/components/h3-map-selector";
import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Save, X } from "lucide-react";

interface Props {
    defaultValues?: DeliveryZone;
    onSubmit: (values: DeliveryZone) => void;
}

export default function ZoneForm({
    defaultValues,
    onSubmit,
}: Props) {
    const form = useForm<DeliveryZone>({
        resolver: zodResolver(deliveryZoneSchema),
        defaultValues:
            defaultValues ?? {
                id: crypto.randomUUID(),
                name: "",
                hexagons: [],
            },
    });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = form;

    const selectedHexes = watch("hexagons");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">


            {/* Name Field */}
            <Field>
                <FieldLabel htmlFor="name">Zone Name</FieldLabel>
                <FieldContent>
                    <Input
                        id="name"
                        placeholder="Enter zone name"
                        {...register("name")}
                    />
                    {errors.name && (
                        <FieldError>{errors.name.message}</FieldError>
                    )}
                </FieldContent>
            </Field>

            {/* Hexagon Selector Field */}
            <Field>
                <FieldLabel>
                    Select Delivery Area ({selectedHexes.length} selected)
                </FieldLabel>

                <FieldContent>
                    <H3MapSelector
                        value={selectedHexes}
                        onChange={(hexes) =>
                            setValue("hexagons", hexes, {
                                shouldValidate: true,
                            })
                        }
                    />

                    {errors.hexagons && (
                        <FieldError>{errors.hexagons.message}</FieldError>
                    )}
                </FieldContent>
            </Field>



            <div className="flex justify-end gap-2">
                <Button type="submit">
                    <Save /> {defaultValues ? "Update Zone" : "Create Zone"}
                </Button>
                <Button variant={'destructive'}><X /> Cancel</Button>
            </div>
        </form>
    )
}
