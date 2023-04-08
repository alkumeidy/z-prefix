1.) CD to client and npm install
2.) CD to server and npm install
3.) Setup your PG container: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
3.) npx knex migrate:latest
4.) npx knex seed:run
5.) npm start all the things
6.) Troubleshoot all the mysterious bugs?? The AppNavbar currently has a neat race condition where window.sessionStorage loads before it's set. I'd fix it but I'm out of time.
7.) Take pity