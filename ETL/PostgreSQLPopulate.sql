COPY "Products" FROM '/home/gustavo/hackreactor/SDC/CSV/product.csv' WITH (FORMAT csv, HEADER);
COPY "Questions" FROM '/home/gustavo/hackreactor/SDC/CSV/questions.csv' WITH (FORMAT csv, HEADER);
COPY "Answers" FROM '/home/gustavo/hackreactor/SDC/CSV/answers.csv' WITH (FORMAT csv, HEADER);
COPY "AnswerPhotos" FROM '/home/gustavo/hackreactor/SDC/CSV/answers_photos.csv' WITH (FORMAT csv, HEADER);

-- clean the data:

--invalid price
DELETE FROM "Products" WHERE price = 0;





