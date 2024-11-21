import { model } from "@medusajs/framework/utils";

const Custom = model.define("custom", {
    id: model.id().primaryKey(),
    name: model.text().searchable(),
});

export default Custom;