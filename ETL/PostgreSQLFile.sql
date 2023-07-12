DROP TABLE IF EXISTS "AnswerPhotos" CASCADE;
DROP TABLE IF EXISTS "Answers" CASCADE;
DROP TABLE IF EXISTS "Questions" CASCADE;
DROP TABLE IF EXISTS "Products" CASCADE;

CREATE TABLE "Products" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "slogan" TEXT,
  "description" TEXT,
  "category" VARCHAR(100),
  "default_price" INTEGER
);

CREATE TABLE "Questions" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INTEGER,
  "body" TEXT,
  "date_written" BIGINT,
  "asker_name" VARCHAR(50),
  "asker_email" VARCHAR(50),
  "reported" BOOLEAN,
  "helpful" INTEGER

);



CREATE TABLE "Answers" (
  "id" SERIAL PRIMARY KEY,
  "question_id" INTEGER,
  "body" TEXT,
  "date_written" BIGINT,
  "answerer_name" VARCHAR(50),
  "answerer_email" VARCHAR(50),
  "reported" BOOLEAN,
  "helpful" INTEGER
);

CREATE TABLE "AnswerPhotos" (
  "id" SERIAL PRIMARY KEY,
  "answer_id" INTEGER,
  "url" VARCHAR(256)
);

ALTER TABLE "Questions" ADD FOREIGN KEY ("product_id") REFERENCES "Products" ("id") ON DELETE CASCADE ;

ALTER TABLE "Answers" ADD FOREIGN KEY ("question_id") REFERENCES "Questions" ("id") ON DELETE CASCADE;

ALTER TABLE "AnswerPhotos" ADD FOREIGN KEY ("answer_id") REFERENCES "Answers" ("id") ON DELETE CASCADE;
