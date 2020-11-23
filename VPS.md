# VPS

## Configurer Noms de domaines
Dans `zone DNS`, mettre l'adresse IP statique du VPS dans le champs `A`

## Modifier le assword

    $ sudo passwd

Eventuellement ajouter des utilisateurs

    $ sudo adduser mickael

## Configurer SSH
Interdire la connection root

    $ sudo nano /etc/ssh/sshd_config
    PermitRootLogin no

Changer le port

    $ sudo nano /etc/ssh/sshd_config
    Port 1234

Filter les utilisateurs autorisés

    $ sudo nano /etc/ssh/sshd_config
    AllowUsers debian mickael

Redémarrer le service

    $ service sshd restart

## Mise a jour

    $ sudo apt update
    $ sudo apt upgrade
    $ sudo apt dist-upgrade

## Installation des outils

    $ sudo apt install git
    $ sudo apt install nginx
    $ sudo apt nodejs
    $ sudo apt npm


## Configurer Nginx pour le multi-site
1. Mise en place

    $ sudo mdkir -p /var/www/site1.monserver.com/html 
    $ sudo mdkir -p /var/www/site2.monserver.com/html
    $ sudo chown  $user:$user -R /var/www/site1.monserver.com/html
    $ sudo chown  $user:$user -R /var/www/site2.monserver.com/html

2. Créer les fichiers server block

    $ sudo cp /etc/nginx/sites-available/default  /etc/nginx/sites-available/site1
    $ sudo cp /etc/nginx/sites-available/default  /etc/nginx/sites-available/site2

3. Editez les 2 fichiers server block

    $ sudo nano /etc/nginx/sites-available/site1

4. Sans les commentaires le fichier ressemble à ça, il faut y mettre à jour les champs `root` et `server_name` :

    server {
    listen 80 ;
    listen [::]:80 ;

    root /var/www/site1.monserver.com/html;

    index index.html index.htm ;

    server_name site1.monserver.com;

    location / {
    try_files $uri $uri/ =404;
    }

5. Modifier le port de destination 

    location / {
    proxy_pass http://xxx.xxx.xxx.xxx:8080;
    }

6. Editer `/etc/hosts`

    x.x.x.x         site1.monserver.com
    x.x.x.x         site2.monserver.com
En remplaçant `x.x.x.x` par l'adresse ip du serveur.

7. Activation des blocs servers

Il faut créer des liens symboliques vers le répertoire `/etc/nginx/sites-enabled` que Nginx lit toujours au démarrage
    $ sudo ln -s /etc/nginx/sites-available/site1 /etc/nginx/sites-enabled/
    $ sudo ln -s /etc/nginx/sites-available/site2 /etc/nginx/sites-enabled/

8. Vérification

    $ sudo nginx -t
 doit donner :

    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful

Tester aussi :

    $ curl  site1.monserver.com
    $ curl  site2.monserver.com

9. Redémarrer le serveur

    $ sudo service nginx restart

## Configurer un serveur comme service

    $ sudo nano /etc/systemd/system/simplehttp.service

Ecrire le code suivant:

    [Unit]
    Description=Job that runs the python SimpleHTTPServer daemon
    Documentation=man:SimpleHTTPServer(1)
    After=networ.target

    [Service]
    Type=simple
    User=debian
    WorkingDirectory=/var/www/sowatts.net/public
    ExecStart=/usr/bin/python -m SimpleHTTPServer 8080 &
    ExecStop=/bin/kill `/bin/ps aux | /bin/grep SimpleHTTPServer | /bin/grep -v grep | /usr/bin/awk '{ print $2 }'`
    Restart=on-abort

    [Install]
    WantedBy=multi-user.target

Puis 

    $ sudo systemctl daemon-reload
    $ sudo systemctl restart simplehttp.service

Pour le lancer au démarrage (`disable` pour l'enlever):

    $ sudo systemctl enable simplehttp.service

Pour voir le journal:

    $ sudo journalctl -u simplehttp.service

## SEO

    <meta
      name="description"
      content="Web site created using create-react-app"
    />

Voir cet [article](https://www.seo.fr/definition/seo-definition)

## Web analytics

* [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision)
* [Matomo](https://matomo.org)
* [Heap](https://heapanalytics.com/)
* [Clicky](https://clicky.com/)
* [Open Web Analytics](http://www.openwebanalytics.com/)

## Maps

* [snazzymaps](https://snazzymaps.com)
* [mapbox](https://www.mapbox.com/)
* [leafletjs](http://leafletjs.com/)

## Liens :
https://medium.com/simplon-saint-gaudens/chris-explique-configurer-son-propre-vps-pour-des-applications-node-js-bf3807d005c3
https://medium.com/sebbossoutrot/installation-et-configuration-dun-vps-sur-ovh-avec-debian9-wordpress-et-ssl-810603968b71
http://playingwithpixels.gildasp.fr/article/debuter-avec-node-js-cote-serveur-pour-les-nuls
https://www.geek17.com/fr/content/debian-10-buster-prise-en-main-d-un-vps-ssd-d-ovh-103
multisite: https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/


