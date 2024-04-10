CREATE TABLE IF NOT EXISTS "items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"unit" varchar(50),
	"category" varchar(50),
	"price" varchar(100),
	"discount_price" numeric(10, 2),
	"opening_stock" numeric(10, 2),
	"item_name" varchar(256),
	"item_code" varchar(50),
	"item_type" varchar(50),
	"hsn_code" varchar(50),
	"sales_price" numeric(10, 2),
	"opening_stock_price" numeric(10, 2),
	"taxes" varchar(100),
	"created_at" timestamp DEFAULT now()
);
