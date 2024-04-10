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
                error: "invalid price",
            }),
            discountPrice: t.String({
                minLength: 1,
                error: "invalid discount price",
            }),
            openingStock: t.String({
                minLength: 1,
                error: "invalid opening stock",
            }),
            itemName: t.String({
                minLength: 1,
                error: "invalid item name",
            }),
            itemCode: t.String({
                minLength: 1,
                error: "invalid item code",
            }),
            hsnCode: t.String({
                minLength: 1,
                error: "invalid hsn code",
            }),
            salesPrice: t.String({
                minLength: 1,
                error: "invalid sales price",
            }),
            salesPriceType: t.Enum({
                withTax: "with Tax",
                withoutTax: "without Tax",
                error: "invalid sales price type",
            }),
            openingStockPrice: t.String({
                minLength: 1,
                error: "invalid opening stock price",
            }),
            taxes: t.String({
                minLength: 1,
                error: "invalid taxes",
            }),
            itemType: t.String({
                minLength: 1,
                error: "invalid item type",
            }),
            cess: t.String({
                minLength: 0,
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
                category1: "category1",
                category2: "category2",
                category3: "category3",
            }),
            price: t.String({
                minLength: 1,
                error: "invalid price",
            }),
            discountPrice: t.String({
                minLength: 1,
                error: "invalid discount price",
            }),
            openingStock: t.String({
                minLength: 1,
                error: "invalid opening stock",
            }),
            itemName: t.String({
                minLength: 1,
                error: "invalid item name",
            }),
            itemCode: t.String({
                minLength: 1,
                error: "invalid item code",
            }),
            hsnCode: t.String({
                minLength: 1,
                error: "invalid hsn code",
            }),
            salesPrice: t.String({
                minLength: 1,
                error: "invalid sales price",
            }),
            salesPriceType: t.Enum({
                withTax: "with Tax",
                withoutTax: "without Tax",
                error: "invalid sales price type",
            }),
            openingStockPrice: t.String({
                minLength: 1,
                error: "invalid opening stock price",
            }),
            taxes: t.String({
                minLength: 1,
                error: "invalid taxes",
            }),
            itemType: t.String({
                minLength: 1,
                error: "invalid item type",
            }),
            cess: t.String({
                minLength: 0,
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
