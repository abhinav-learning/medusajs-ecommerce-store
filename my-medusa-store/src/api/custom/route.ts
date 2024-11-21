import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { HELLO_MODULE } from "src/modules/hello";
import HelloModuleService from "src/modules/hello/service";

export const POST = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const helloService: HelloModuleService = req.scope.resolve(
        HELLO_MODULE
    );
    const { name } = req.body;
    const new_custom = await helloService.createCustoms({
        name: name
    })
    res.status(201).json({ new_custom });
}

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const helloService: HelloModuleService = req.scope.resolve(
        HELLO_MODULE
    );
    const customs = await helloService.listCustoms();
    res.status(200).json({ customs });
}