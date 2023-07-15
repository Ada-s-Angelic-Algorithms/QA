COPY "Products" FROM '/home/gustavo/hackreactor/SDC/CSV/product.csv' WITH (FORMAT csv, HEADER);
COPY "Questions" FROM '/home/gustavo/hackreactor/SDC/CSV/questions.csv' WITH (FORMAT csv, HEADER);
COPY "Answers" FROM '/home/gustavo/hackreactor/SDC/CSV/answers.csv' WITH (FORMAT csv, HEADER);
COPY "AnswerPhotos" FROM '/home/gustavo/hackreactor/SDC/CSV/answers_photos.csv' WITH (FORMAT csv, HEADER);


--UPDATE THE SEQUENCE SINCE COPYING MESSES IT UP
SELECT setval(pg_get_serial_sequence('"Products"', 'id'), COALESCE((SELECT MAX(id)+1 FROM "Products"), 1), false);
SELECT setval(pg_get_serial_sequence('"Questions"', 'id'), COALESCE((SELECT MAX(id)+1 FROM "Questions"), 1), false);
SELECT setval(pg_get_serial_sequence('"Answers"', 'id'), COALESCE((SELECT MAX(id)+1 FROM "Answers"), 1), false);
SELECT setval(pg_get_serial_sequence('"AnswerPhotos"', 'id'), COALESCE((SELECT MAX(id)+1 FROM "AnswerPhotos"), 1), false);
-- clean the data:





