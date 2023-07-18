sudo service postgresql start

sudo -u postgres psql -d sdcdb
# Make tables
\i /home/gustavo/hackreactor/SDC/QA/ETL/PostgreSQLFile.sql

# Populate tables
\i /home/gustavo/hackreactor/SDC/QA/ETL/PostgreSQLPopulate.sql


\i /home/gustavo/hackreactor/SDC/QA/ETL/testing.sql

