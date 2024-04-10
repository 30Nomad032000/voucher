CREATE TABLE IF NOT EXISTS "items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"unit" varchar(50) NOT NULL,
	"category" varchar(50) NOT NULL,
	"discount_price" numeric(10, 2),
	"opening_stock" numeric(10, 2) NOT NULL,
	"item_name" varchar(256) NOT NULL,
	"item_code" varchar(50) NOT NULL,
	"item_type" varchar(50) NOT NULL,
	"hsn_code" varchar(50),
	"sales_price" numeric(10, 2),
	"sales_price_type" varchar(50),
	"opening_stock_price" numeric(10, 2),
	"taxes" varchar(100),
	"cess" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL
);
