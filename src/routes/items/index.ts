import Elysia, { t } from "elysia"
import {
    createItem,
    deleteItem,
    getAllItems,
    getItemById,
    updateItem,
} from "./handler"

const itemRoutes = new Elysia({ prefix: "/item" })
    .get("/", () => getAllItems)

    .post("/", ({ body }) => createItem(body), {
        body: t.Object({
            unit: t.Enum({
                bags: "bags",
                Nos: "Nos",
                Ltrs: "Ltrs",
                cans: "cans",
            }),
            category: t.Enum({
                category1: "category1",
                category2: "category2",
                category3: "category3",
            }),
            price: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            discountPrice: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            openingStock: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            itemName: t.String({
                minLength: 1,
                maxLength: 20,
            }),
            itemCode: t.String({
                minLength: 1,
                maxLength: 20,
            }),
            hsnCode: t.String({
                minLength: 1,
                maxLength: 20,
            }),
            salesPrice: t.Enum({
                withTax: "with Tax",
                withoutTax: "without Tax",
            }),
            openingStockPrice: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            taxes: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            itemType: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            cess: t.String({
                minLength: 1,
                maxLength: 10,
            }),
        }),
    })
    .patch("/:id", ({ params: { id }, body }) => updateItem(id, body), {
        params: t.Object({
            id: t.String(),
        }),
        body: t.Object({
            unit: t.Enum({
                bags: "bags",
                Nos: "Nos",
                Ltrs: "Ltrs",
                cans: "cans",
            }),
            category: t.Enum({
                category1: "Category1",
                category2: "Category2",
                category3: "Category3",
            }),
            price: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            discountPrice: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            openingStock: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            itemName: t.String({
                minLength: 1,
                maxLength: 20,
            }),
            itemCode: t.String({
                minLength: 1,
                maxLength: 20,
            }),
            hsnCode: t.String({
                minLength: 1,
                maxLength: 20,
            }),
            salesPrice: t.Enum({
                withTax: "with Tax",
                withoutTax: "without Tax",
            }),
            openingStockPrice: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            taxes: t.String({
                minLength: 1,
                maxLength: 10,
            }),
            itemType: t.Enum({
                product: "Product",
                service: "Service",
            }),
            cess: t.String({
                minLength: 1,
                maxLength: 10,
            }),
        }),
    })
    .delete("/:id", ({ params: { id } }) => deleteItem(id), {
        params: t.Object({
            id: t.String(),
        }),
    })
    .get("/:id", ({ params: { id } }) => getItemById(id), {
        params: t.Object({
            id: t.String(),
        }),
    })

export default itemRoutes
