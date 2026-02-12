import { z } from "zod";

export const deliveryZoneSchema = z.object({
    id: z.string(),
    name: z.string().min(3, "Name must be at least 3 characters"),
    hexagons: z.array(z.string()).min(1, "Select at least one hexagon"),
});

export type DeliveryZone = z.infer<typeof deliveryZoneSchema>;
