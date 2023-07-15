sudo service postgresql start

sudo -u postgres psql -d sdcdb

\i /home/gustavo/hackreactor/SDC/QA/ETL/PostgreSQLFile.sql     make tables


\i /home/gustavo/hackreactor/SDC/QA/ETL/PostgreSQLPopulate.sql


\i /home/gustavo/hackreactor/SDC/QA/ETL/testing.sql

