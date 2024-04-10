import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import {
    pgTable,
    varchar,
    timestamp,
    decimal,
    pgEnum,
    serial,
} from "drizzle-orm/pg-core"

export const itemTypeEnum = pgEnum("itemType", ["Product", "Service"])
export const unitEnum = pgEnum("unit", ["bags", "Nos", "Ltrs", "cans"])
export const categoryEnum = pgEnum("category", [
    "Category1",
    "Category2",
    "Category3",
])
export const salesPriceTypeEnum = pgEnum("salesPriceType", [
    "with Tax",
    "without Tax",
])
export const taxEnum = pgEnum("tax", [
    "None - 0.0",
    "Exempted - 0.0",
    "GST @ 0%",
    "IGST @ 0%",
    "GST @ 5%",
    "IGST @5%",
    "GST  @ 12%",
    "IGST @ 12%",
    "GST @ 18%",
    "IGST @ 18%",
    "GST @ 28%",
    "IGST @ 28%",
])

export const items = pgTable("items", {
    id: serial("id").primaryKey(),
    unit: unitEnum("unit"),
    category: categoryEnum("category"),
    discountPrice: decimal("discount_price", { precision: 10, scale: 2 }),
    openingStock: decimal("opening_stock", {
        precision: 10,
        scale: 2,
    }).notNull(),
    itemName: varchar("item_name", { length: 256 }),
    itemCode: varchar("item_code", { length: 50 }),
    itemType: itemTypeEnum("item_type"),
    hsnCode: varchar("hsn_code", { length: 50 }),
    salesPrice: decimal("sales_price", { precision: 10, scale: 2 }),
    salesPriceType: salesPriceTypeEnum("sales_price_type"),
    openingStockPrice: decimal("opening_stock_price", {
        precision: 10,
        scale: 2,
    }),
    taxes: taxEnum("taxes"),
    cess: varchar("cess", { length: 100 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})

export type Item = InferSelectModel<typeof items>
export type NewItem = InferInsertModel<typeof items>
export type UpdateItem = {
    unit?: Item["unit"] | null
    category?: Item["category"] | null
    discountPrice?: Item["discountPrice"] | null
    openingStock?: Item["openingStock"] | null
    itemName?: Item["itemName"] | null
    itemCode?: Item["itemCode"] | null
    itemType?: Item["itemType"] | null
    hsnCode?: Item["hsnCode"] | null
    salesPrice?: Item["salesPrice"] | null
    salesPriceType?: Item["salesPriceType"] | null
    openingStockPrice?: Item["openingStockPrice"] | null
    taxes?: Item["taxes"] | null
    cess?: Item["cess"] | null
}
