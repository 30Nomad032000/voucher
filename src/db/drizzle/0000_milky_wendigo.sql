DO $$ BEGIN
 CREATE TYPE "category" AS ENUM('Category1', 'Category2', 'Category3');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "itemType" AS ENUM('Product', 'Service');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "salesPriceType" AS ENUM('with Tax', 'without Tax');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "tax" AS ENUM('None - 0.0', 'Exempted - 0.0', 'GST @ 0%', 'IGST @ 0%', 'GST @ 5%', 'IGST @5%', 'GST  @ 12%', 'IGST @ 12%', 'GST @ 18%', 'IGST @ 18%', 'GST @ 28%', 'IGST @ 28%');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "unit" AS ENUM('bags', 'Nos', 'Ltrs', 'cans');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "items" (
	"id" serial PRIMARY KEY NOT NULL,
	"unit" "unit",
	"category" "category",
	"discount_price" numeric(10, 2),
	"opening_stock" numeric(10, 2) NOT NULL,
	"item_name" varchar(256) NOT NULL,
	"item_code" varchar(50) NOT NULL,
	"item_type" "itemType",
	"hsn_code" varchar(50),
	"sales_price" numeric(10, 2),
	"sales_price_type" "salesPriceType",
	"opening_stock_price" numeric(10, 2),
	"taxes" "tax",
	"cess" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL
);
