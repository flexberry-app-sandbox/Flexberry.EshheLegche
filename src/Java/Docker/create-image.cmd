docker build --no-cache -f SQL\Dockerfile.PostgreSql -t eshhelegche-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t eshhelegche-java/app ../../..
