BEGIN;

--products
EXPLAIN ANALYZE
UPDATE "Products" SET "default_price" = 200 WHERE "id" = 500;

EXPLAIN ANALYZE
DELETE FROM "Products" WHERE "id" = 500;

EXPLAIN ANALYZE
INSERT INTO "Products" ( "name", "slogan", "description", "category", "default_price")
VALUES ('Test Product', 'Test Slogan', 'Test Description', 'Test Category', 123);

EXPLAIN ANALYZE
SELECT * FROM "Products" WHERE "category" = 'Test Category';

--questions

EXPLAIN ANALYZE
SELECT * FROM "Questions" WHERE "product_id" = 601;


EXPLAIN ANALYZE
DELETE FROM "Questions" WHERE "question_id" = 601;

EXPLAIN ANALYZE
INSERT INTO "Questions" ("product_id", "body", "date_written", "name", "email", "reported", "question_helpfulness")
VALUES (601, 'Test Question Body', 123456789, 'Test Asker Name', 'testasker@email.com', false, 123);


--Answers

EXPLAIN ANALYZE
SELECT * FROM "Answers" WHERE "id" = 500;

EXPLAIN ANALYZE
SELECT * FROM "Answers" WHERE "question_id" = 500;

EXPLAIN ANALYZE
UPDATE "Answers" SET "reported" = true WHERE "id" = 500;

EXPLAIN ANALYZE
DELETE FROM "Answers" WHERE "id" = 500;

EXPLAIN ANALYZE
INSERT INTO "Answers" ("question_id", "body", "date", "name", "email", "reported", "helpfulness")
VALUES (500, 'Test Answer Body', 123456789, 'Test Answerer Name', 'testanswerer@email.com', false, 123);

--AnswerPhotos

EXPLAIN ANALYZE
SELECT * FROM "AnswerPhotos" WHERE "id" = 3;

EXPLAIN ANALYZE
SELECT * FROM "AnswerPhotos" WHERE "answer_id" = 3;

EXPLAIN ANALYZE
UPDATE "AnswerPhotos" SET "url" = 'Updated URL' WHERE "id" = 3;

EXPLAIN ANALYZE
INSERT INTO "AnswerPhotos" ("answer_id", "url")
VALUES (3, 'Test URL');



ROLLBACK;


