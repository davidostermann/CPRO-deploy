
## Faire un backup de la bdd local :

`docker exec -ti <process_id> pg_dump trellodb>BACKUP.sql -U dost`

## Le push comme expliquer dans la doc ne fonctionne pas avec notre postgres docker :

`PGUSER=dost PGPASSWORD=changeme heroku pg:push HEROKU_POSTGRESQL_MAGENTA mylocaldb --app sushi`

## Possibilité d'executer psql sur le heroku postgres mais ça ne nous emmene pas loin

`heroku pg:psql --app trellolo`

## J'ai fait un script node à executer sur le server

setupdb.js

## et je l'ai ajouter au script postinstall
