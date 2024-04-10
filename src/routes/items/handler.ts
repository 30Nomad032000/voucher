import { count, eq } from "drizzle-orm"
import { db } from "../../db"
import { items, NewItem, UpdateItem } from "../../db/schema"
import { NotFoundError } from "elysia"
import { DbError } from "../../exceptions/DbError"

export async function createItem(body: NewItem) {
    try {
        const item = await db
            .insert(items)
            .values({
                unit: body.unit,
                category: body.category,
                discountPrice: body.discountPrice,
                openingStock: body.openingStock,
                itemName: body.itemName,
                itemCode: body.itemCode,
                itemType: body.itemType,
                hsnCode: body.hsnCode,
                salesPrice: body.salesPrice,
                salesPriceType: body.salesPriceType,
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

export async function updateItem(id: number, body: UpdateItem) {
    try {
        const allItem = await db.select().from(items)
        const getItem = allItem.find((item) => item.id === id)

        if (!getItem) {
            throw new DbError("Item not found")
        }
        const updatedUser = await db
            .update(items)
            .set({
                ...(body.unit !== null ? { unit: body.unit } : null),
                ...(body.category !== null
                    ? { category: body.category }
                    : null),
                ...(body.discountPrice !== null
                    ? { discountPrice: body.discountPrice }
                    : null),
                ...(body.openingStock !== null
                    ? { openingStock: body.openingStock }
                    : null),
                ...(body.itemName !== null
                    ? { itemName: body.itemName }
                    : null),
                ...(body.itemCode !== null
                    ? { itemCode: body.itemCode }
                    : null),
                ...(body.itemType !== null
                    ? { itemType: body.itemType }
                    : null),
                ...(body.hsnCode !== null ? { hsnCode: body.hsnCode } : null),
                ...(body.salesPrice !== null
                    ? { salesPrice: body.salesPrice }
                    : null),
                ...(body.salesPriceType !== null
                    ? { salesPriceType: body.salesPriceType }
                    : null),
                ...(body.openingStockPrice !== null
                    ? { openingStockPrice: body.openingStockPrice }
                    : null),
                ...(body.taxes !== null ? { taxes: body.taxes } : null),
                ...(body.cess !== null ? { cess: body.cess } : null),
            })
            .where(eq(items.id, id))
            .returning()
        return {
            success: true,
            message: "Item updated successfully",
            data: updatedUser,
        }
    } catch (e) {
        throw new DbError("Item not found")
    }
}

export async function getItemById(id: number) {
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
        if (!items) {
            throw new DbError("Items not found")
        }
        return {
            success: true,
            items,
        }
    } catch (e) {
        throw new DbError("Items not found")
    }
}

export async function searchItems(query: string) {
    try {
        const result = await db.query.items.findMany({
            where: (item, { ilike }) => ilike(item.itemName, `%${query}%`),
        })
        if (!result) {
            throw new DbError("Item not found")
        }
        return {
            success: true,
            count: result.length,
            items: result,
        }
    } catch (e) {
        throw new NotFoundError("Item not found")
    }
}

export async function deleteItem(id: number) {
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
        throw new DbError("Item not found")
    }
}
