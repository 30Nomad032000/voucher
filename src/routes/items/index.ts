import Elysia, { t } from "elysia"
import {
    createItem,
    deleteItem,
    getAllItems,
    getItemById,
    searchItems,
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
                category1: "Category1",
                category2: "Category2",
                category3: "Category3",
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
            }),
            openingStockPrice: t.String({
                minLength: 1,
                error: "invalid opening stock price",
            }),
            taxes: t.Enum({
                None: "None - 0.0",
                Exempted: "Exempted - 0.0",
                GST0: "GST @ 0%",
                IGST0: "IGST @ 0%",
                GST5: "GST @ 5%",
                IGST5: "IGST @5%",
                GST12: "GST  @ 12%",
                IGST12: "IGST @ 12%",
                GST18: "GST @ 18%",
                IGST18: "IGST @ 18%",
                GST28: "GST @ 28%",
                IGST28: "IGST @ 28%",
            }),
            itemType: t.Enum({
                Product: "Product",
                Service: "Service",
            }),
            cess: t.Optional(t.String()),
        }),
    })
    .patch("/:id", ({ params: { id }, body }) => updateItem(id, body), {
        params: t.Object({
            id: t.Numeric(),
        }),
        body: t.Object({
            unit: t.Optional(
                t.Enum({
                    bags: "bags",
                    Nos: "Nos",
                    Ltrs: "Ltrs",
                    cans: "cans",
                })
            ),
            category: t.Optional(
                t.Enum({
                    category1: "Category1",
                    category2: "Category2",
                    category3: "Category3",
                })
            ),
            discountPrice: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid discount price",
                })
            ),
            openingStock: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid opening stock",
                })
            ),
            itemName: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid item name",
                })
            ),
            itemCode: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid item code",
                })
            ),
            hsnCode: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid hsn code",
                })
            ),
            salesPrice: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid sales price",
                })
            ),
            salesPriceType: t.Optional(
                t.Enum({
                    withTax: "with Tax",
                    withoutTax: "without Tax",
                })
            ),
            openingStockPrice: t.Optional(
                t.String({
                    minLength: 1,
                    error: "invalid opening stock price",
                })
            ),
            taxes: t.Optional(
                t.Enum({
                    None: "None - 0.0",
                    Exempted: "Exempted - 0.0",
                    GST0: "GST @ 0%",
                    IGST0: "IGST @ 0%",
                    GST5: "GST @ 5%",
                    IGST5: "IGST @5%",
                    GST12: "GST  @ 12%",
                    IGST12: "IGST @ 12%",
                    GST18: "GST @ 18%",
                    IGST18: "IGST @ 18%",
                    GST28: "GST @ 28%",
                    IGST28: "IGST @ 28%",
                })
            ),
            itemType: t.Optional(
                t.Enum({
                    Product: "Product",
                    Service: "Service",
                })
            ),
            cess: t.Optional(t.String()),
        }),
    })
    .delete("/:id", ({ params: { id } }) => deleteItem(id), {
        params: t.Object({
            id: t.Numeric(),
        }),
    })
    .get("/:id", ({ params: { id } }) => getItemById(id), {
        params: t.Object({
            id: t.Numeric(),
        }),
    })
    .get("/search", ({ query: { name } }) => searchItems(name), {
        query: t.Object({
            name: t.String(),
        }),
    })

export default itemRoutes
