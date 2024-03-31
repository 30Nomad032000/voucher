import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  decimal,
  pgEnum,
} from "drizzle-orm/pg-core"


// const itemTypeEnum = pgEnum("item_type", ["product", "service"]);
// const unitEnum = pgEnum("unit", ["bags", "Nos", "Ltrs", "cans"]);
// const categoryEnum = pgEnum("category", [
//   "category1",
//   "category2",
//   "category2",
// ])
// const salesPriceEnum = pgEnum("sales_price", ["with tax", "without tax"]);
// const taxEnum = pgEnum('tax', [
//   "None - 0.0",
//   "Exempted - 0.0",
//   "GST @ 0%",
//   "IGST @ 0%",
//   "GST @ 5%",
//   "IGST @5%",
//   "GST  @ 12%",
//   "IGST @ 12%",
//   "GST @ 18%",
//   "IGST @ 18%",
//   "GST @ 28%",
//   "IGST @ 28%",
// ]);

export const items = pgTable("items", {
  id: uuid("id").defaultRandom().primaryKey(),
  unit: varchar("unit", { length: 50 }).notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }),
  discountPrice: decimal("discount_price", { precision: 10, scale: 2 }),
  openingStock: decimal("opening_stock", { precision: 10, scale: 2 }).notNull(),
  itemName: varchar("item_name", { length: 256 }).notNull(),
  itemCode: varchar("item_code", { length: 50 }).notNull(),
  itemType: varchar("item_type", { length: 50 }).notNull(),
  hsnCode: varchar("hsn_code", { length: 50 }),
  salesPrice: decimal("sales_price", { precision: 10, scale: 2 }),
  openingStockPrice: decimal("opening_stock_price", { precision: 10, scale: 2 }),
  taxes: varchar("taxes", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export type Item = InferSelectModel<typeof items>
export type NewItem = InferInsertModel<typeof items>
