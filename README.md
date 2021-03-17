# Project 4: Aviation Maintenance
* Tom Gores

## App idea

displays basic specifications and data associated with a model of aircraft

## Technologies employed

* Node.js
* Postgres
* Express
* EJS
* Heroku
* Surge

## Planing and approach taken

* Brainstorm for the app idea
    + Aviation encyclopedia
    + Current flight data
    + Aircraft data and maintenance

* Wireframe
    + [Wireframe](./documentation/wireframe.png)
        Database
        Avmaint {
            acmodel: "A35",
            engmodel: "O-470"
            ttaf: 2200
            ttsn: 2200
            smoh: 600
            annualinsp: true
            awdirectives: true
            damagehist: false
        }

## Repository Links
* https://github.com/tjgores/Aviation-Maintenance-backend
* https://github.com/tjgores/Aviation-Maintenance-frontend
* https://aviation-maintenance.herokuapp.com/avmaint/all
* http://aviation-maint.surge.sh/

## User stories
1. As a user I want to see aircraft models that are in the database

2. As a user I want to access the data associated with each aircraft in the database ( specifications and maintenance records)

3. As a user I want to return to the page wehre I can select an aircraft

4. As a user I want to be able to edit the specifications and maintenance records
