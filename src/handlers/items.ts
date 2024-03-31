import { eq } from "drizzle-orm"
import { db } from "../db"
import { Item, items, NewItem } from "../db/schema"

export async function createItem(body: NewItem) {
  const item = await db.insert(items).values({
    unit: body.unit,
    category: body.category,
    price: body.price,
    discountPrice: body.discountPrice,
    openingStock: body.openingStock,
    itemName: body.itemName,
    itemCode: body.itemCode,
    itemType: body.itemType,
    hsnCode: body.hsnCode,
    salesPrice: body.salesPrice,
    openingStockPrice: body.openingStockPrice,
    taxes: body.taxes,
  })
  return `Item created successfully`
}

export async function updateItem(body: Item, id: string) {
  const allItem = await db.select().from(items)
  const getItem = allItem.find((item) => item.id === id)

  if (!getItem) {
    return `Item with ${id} does not exit`
  }

  const updatedUser = await db
    .update(items)
    .set({
      unit: body.unit,
      category: body.category,
      price: body.price,
      discountPrice: body.discountPrice,
      openingStock: body.openingStock,
      itemName: body.itemName,
      itemCode: body.itemCode,
      itemType: body.itemType,
      hsnCode: body.hsnCode,
      salesPrice: body.salesPrice,
      openingStockPrice: body.openingStockPrice,
      taxes: body.taxes,
    })
    .where(eq(items.id, id))
  return { updatedUser, message: "Item updated successfully" }
}

export async function getItemById(id: string) {
  return db.query.items.findFirst({
    where: (item, { eq }) => eq(item.id, id),
  })
}

export async function getAllItems() {
  return await db.select().from(items)
}

export async function searchItems(query: string) {
  return await db.query.items.findMany({
    where: (item, { ilike }) => ilike(item.itemName, `%${query}%`),
  })
}

export async function deleteItem(id: string) {
  const allItems = await db.select().from(items)
  const getItem = allItems.find((item) => item.id === id)

  if (!getItem) {
    return `Item with ${id} does not exist`
  }
  const item = await db.delete(items).where(eq(items.id, id))
  return { item, message: "Item deleted successfully" }
}
