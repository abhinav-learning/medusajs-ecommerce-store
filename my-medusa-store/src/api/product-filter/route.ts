import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {
    const query = req.scope.resolve(
        ContainerRegistrationKeys.QUERY
    )

    const { data: products } = await query.graph({
        entity: "product",
        fields: ["*"],
        filters: {
            id: "prod_01JD7DNHBJ4FGVPPYB2CWRA8VN"
        }
    })

    res.json({
        products
    })
}