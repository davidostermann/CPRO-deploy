# DEPLOIEMENT

## Votre app en mode monolithique (le back et le front sur le meme server)

1. Mettre le front et le back dans le même dossier
2. Faire un proxy pour travailler le front en développement (—proxy) cf. https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
3. Builder le front 
4. Faire pointer les router d’api à travers le fragment /api afin de laisser la place pour le front (index.html)
5. Faire une route static vers le dossier « dist » (angular) ou « build » (react)
6. Faire pointer /* vers index.html pour laisser le reste au router front (ne pas oublier <base href="/"> côté front)
7. tester
8. Mettre tout ça sur un repo GitHub

## Preparer pour Heroku
	
1. Variable d’environnement et simulation en dev avec un .env
2. Créer une app sur le dashboard heroku :
    1. Ajouter un git hook heroku sur le repo du projet
    2. Ajouter un add-on postgres
    3. Récupérer le nom de la nouvelle variable d’environnement pour l’url de la DB et l’ajouter au fichier .env
    4. Ajouter un script postintall dans le package.json à la racine pour installer les dépendances du front et builder le front
    5. Ajouter une env NPM_CONFIG_PRODUCTION = false afin que HEROKU install les dev-dependencies pcq nous en avons besoin pour build le front (vue-cli, angular-cli ou create-react-app ou webpack)
    6. Insérer des données dans la base heroku avec la command : node setupdb (a ajouter au postinstall)

### Plus d’info

https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli

## Faire un backup de la bdd local

`docker exec -ti <process_id> pg_dump trellodb>BACKUP.sql -U dost`

## Le push comme expliquer dans la doc ne fonctionne pas avec notre postgres docker

`PGUSER=dost PGPASSWORD=changeme heroku pg:push HEROKU_POSTGRESQL_MAGENTA mylocaldb --app sushi`

## Possibilité d'executer psql sur le heroku postgres mais ça ne nous emmene pas loin

`heroku pg:psql --app trellolo`

## J'ai fait un script node à executer sur le server

setupdb.js

## et je l'ai ajouter au script postinstall
