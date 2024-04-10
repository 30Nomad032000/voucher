import { eq } from "drizzle-orm"
import { db } from "../../db"
import { items, NewItem } from "../../db/schema"
import { NotFoundError } from "elysia"
import { DbError } from "../../exceptions/DbError"

export async function createItem(body: NewItem) {
    try {
        const item = await db
            .insert(items)
            .values({
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
                cess: body.cess,
            })
            .returning()
        if (!item) {
            throw new DbError("Item not created")
        }
        return {
            success: true,
            message: "Item created successfully",
            data: item,
        }
    } catch (e) {
        throw new DbError("Item not created")
    }
}

export async function updateItem(id: string, body: NewItem) {
    try {
        const allItem = await db.select().from(items)
        const getItem = allItem.find((item) => item.id === id)

        if (!getItem) {
            throw new DbError("Item not found")
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
                cess: body.cess,
            })
            .where(eq(items.id, id))
            .returning()
        return {
            success: true,
            message: "Item updated successfully",
            data: updatedUser,
        }
    } catch (e) {
        throw new DbError("Item not updated")
    }
}

export async function getItemById(id: string) {
    try {
        const item = await db.query.items.findFirst({
            where: (item, { eq }) => eq(item.id, id),
        })
        if (!item) {
            throw new DbError("Item not found")
        }
        return {
            success: true,
            item,
        }
    } catch (e) {
        throw new NotFoundError("Item not found")
    }
}

export async function getAllItems() {
    try {
        const items = await db.query.items.findMany()
        return {
            success: true,
            items,
        }
    } catch (e) {
        console.log("Error getting items", e)
    }
}

export async function searchItems(query: string) {
    return await db.query.items.findMany({
        where: (item, { ilike }) => ilike(item.itemName, `%${query}%`),
    })
}

export async function deleteItem(id: string) {
    try {
        const allItems = await db.select().from(items)
        const getItem = allItems.find((item) => item.id === id)
        if (!getItem) {
            throw new DbError("Item not found")
        }
        const item = await db.delete(items).where(eq(items.id, id)).returning()
        return {
            success: true,
            message: "Item deleted successfully",
            data: item,
        }
    } catch (e) {
        throw new DbError("Item not deleted")
    }
}
