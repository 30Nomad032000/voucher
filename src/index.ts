import { Elysia, t } from "elysia";
import { logger } from "@bogeychan/elysia-logger";
import { createItem, deleteItem, getAllItems, getItemById, searchItems, updateItem } from "./handlers/items"
import { Item, NewItem } from "./db/schema";

const app = new Elysia();

app.use(
  logger({
    level: "error",
  })
)

app.get('/', () => ({
  message: 'Hello Elysia with drizzle',
}));

app.post('/item', ({ body }: { body: NewItem }) => {
  createItem(body), {
    body: t.Object({
      unit: t.String(),
      category: t.String(),
      price: t.String(),
      discountPrice: t.String(),
      openingStock: t.String(),
      itemName: t.String(),
      itemCode: t.String(),
      hsnCode: t.String(),
      salesPrice: t.String(),
      openingStockPrice: t.String(),
      taxes: t.String(),
      itemType: t.String(),
    }),
  }
});

app.patch(
  '/item/:id',
  ({ params: { id }, body }) => {
    updateItem(body as Item, id);
  },
  {
    body: t.Object({
      unit: t.String(),
      category: t.String(),
      price: t.String(),
      discountPrice: t.String(),
      openingStock: t.String(),
      itemName: t.String(),
      itemCode: t.String(),
      hsnCode: t.String(),
      salesPrice: t.String(),
      openingStockPrice: t.String(),
      taxes: t.String(),
      itemType: t.String(),
    }),
  }
);

app.delete('/item/:id', ({ params: { id } }) => {
  deleteItem(id);
});

app.get('/item/:id', ({ params: { id } }) => getItemById(id))

app.get('/items', () => getAllItems)

app.get('/items/:name', ({ params: { name } }) => searchItems(name))

app.listen(3000, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
});