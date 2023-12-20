docker build --no-cache -f SQL\Dockerfile.PostgreSql -t eshhelegche/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t eshhelegche/app ../..
