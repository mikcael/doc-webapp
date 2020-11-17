# Nginx

## Installation

    $ sudo apt install nginx

## Configuration

    $ sudo mdkir -p /var/www/site1.monserver.com/html 
    $ sudo mdkir -p /var/www/site2.monserver.com/html
    $ sudo chown  $user:$user -R /var/www/site1.monserver.com/html
    $ sudo chown  $user:$user -R /var/www/site2.monserver.com/html

## Créer les fichiers server block

    $ sudo cp /etc/nginx/sites-available/default  /etc/nginx/sites-available/site1
    $ sudo cp /etc/nginx/sites-available/default  /etc/nginx/sites-available/site2

Editez les 2 fichiers server block

    $ sudo nano /etc/nginx/sites-available/site1

Sans les commentaires le fichier ressemble à ça, il faut y mettre à jour les champs `root` et `server_name` :

    server {
    listen 80 ;
    listen [::]:80 ;

    root /var/www/site1.monserver.com/html;

    index index.html index.htm ;

    server_name site1.monserver.com;

    location / {
    try_files $uri $uri/ =404;
    }

## Editer `/etc/hosts`

    x.x.x.x         site1.monserver.com
    x.x.x.x         site2.monserver.com
En remplaçant `x.x.x.x` par l'adresse ip du serveur.

## Activation des blocs servers

Il faut créer des liens symboliques vers le répertoire `/etc/nginx/sites-enabled` que Nginx lit toujours au démarrage
    $ sudo ln -s /etc/nginx/sites-available/site1 /etc/nginx/sites-enabled/
    $ sudo ln -s /etc/nginx/sites-available/site2 /etc/nginx/sites-enabled/

## Vérification

    $ sudo nginx -t
 doit donner :

    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful

Tester aussi :

    $ curl  site1.monserver.com
    $ curl  site2.monserver.com

## Redémarrer le serveur

    $ sudo service nginx restart