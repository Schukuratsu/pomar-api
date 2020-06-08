# pomar-api

## Mongo setup

### To run with *docker*

> Make sure you have *docker* installed first

Run dockerized mongo for the first time with:

    docker run -p 27018:27017 --rm --name pomar-mongo -d mongo

#### Docker container management

You can start and stop the existing container at any time with

    docker container start pomar-mongo

and 

    docker stop pomar-mongo

#### To reset the database

> This will delete all data without asking for confirmation

    docker kill pomar-mongo ; sleep 3 ; docker run -p 27018:27017 --rm --name pomar-mongo -d mongo

### To run with your local instance of mongo

Modify `dotenvexample.txt` to suit your mongo configuration and save the file as `.env`.

## Server setup

Install the dependencies with:

    yarn

Then start the server with:

    yarn start