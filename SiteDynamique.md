# Site Dynamique

## Technos
+ HTML, CSS
+ Bulma pour le front
+ JQuery pour les animations
+ AJAX
+ PHP pour le scripting
+ SEO pour le référencement
+ FTP pour l'hébergement OVH
+ Unsplach pour les images libre de droits (tant qu'on mentionne l'auteur)
+ Gist : bout de code sur Github à partager (ici le mail.php)
+ Font Awesome : pour avoir une font avec des icones
+ UI Color : pour avoir des couleurs un peu sympa
+ faux texte lorem ipsum

## Tools
+ https://bulma.io
+ https://htmlreference.io (bible du HTML)
+ https://cssreference.io (bible du CSS)
+ https://unsplash.com
+ https://fontawesome.com
+ https://flatuicolors.com
+ http://lorem-ipsum.studiovitamine.com

## Créer la structure HTML

doctype, head, body
link css, link font

### Bulma
Insérer le CDN bulma : 

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
(min = version minifié pour prendre moins de place)

### JQuery
Baslise script juste avant la fermeture du body (chercher JQuery google host): 

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

Ajouter en dessous un lien vers le script main.js pour faire les animations JQuery

### Font
Aller voir `google font`, les sélectionner et les ajouter et aller chercher le lien dans Embed a importer dans le head
pour inclure dans le css il faut copier la ligne proposée sur google fonts
Aller sur font awesome puis get starter et récupérer le CDN

### SEO
Balise meta dans le head pour un référencement naturel
se renseigner sur les balises meta pour le seo sur google (description et keyword sont les 2 + importantes pour le référencement naturel)

### Structure
on créé header, portfolio etc ... dans div de class block (classe Bulma) qui créé un div en display block avec un peu de margin pour espacer

**header**
On veut le séparer un 2, à gche le logo, à dte le menu.

Pour centrer verticalement, dans le css on donne le `height = line-height`
Pour mettre tout le monde sur la même ligne, c'est le float:left du header-logo qui va faire ça.
le float:right du nav va permettre de mettre le menu à droite
Margin left/right pour espacer l'un ou l'autre du bord

gris très foncé : `#333333`, gris clair : `#eeeeee`

Pour que le header suive le scroll : `position:fixed;` (et top:0; du coup avec)


**banner**
On pourrait la mettre en background dans le css mais la solution la plus usuelle est le img dans le html
Bulma s'occupe déjà du resize avec la class block
on va rendre le fond du header transparent : background-color: rgba(0, 0, 0, 0);
Attention la bannière peut ne pas être au collé en haut, il faut donc la recoller dans le css (margin-top:-30px;)
le header a disparu, il faut le remettere au dessus de tout : z-index:999;


**about**
On va utiliser la class columns et column pour créer 3 colonnes. Bulma va gérer plus implement que Bootstrap a qui il faut spécifier les `col-md-4` etc ...
on va utiliser les logos sur font awesome
ajouter la classe about-single-element (par exemple) permet d'agir sur le style sans toucher aux classes de Bulma
/!\ font awsome est passé au svg, il faut ajouter une class icon pour pouvoir les manipuler dans le css (ex les grossir)


**portfolio**
récupérer un exemple de layout déjà tout prêt dans bulma avec les tile:
https://bulma.io/documentation/layout/tiles/



**footer**
voir les form sur bulma
ajouter des propriétés name pour les utiliser ensuite avec php
gist mail : https://gist.github.com/AntoninMarchardDev/92cedeb61ffc980a2074f5786fde0df0
On va ensuite utiliser AJAX qui va nous permettre de faire une equête http (post, get, put, delete) pour envoyer de la data sur un serveur
AJAX va permettre de ne pas recharger toute la page
on copie colle le code du gist mail_sent.js dans le main.js (a mettre a jour avec les bons noms):
e.preventDefault(); // pour pas que la page se reload
on créé la variable data qui est un objet avec ts les id du formulaire (il faut donc ajouter a chaque un id identique au name)
AJAX est une méthode de jquery qu'on appele $.ajax({....
AJAX va renvoyer success ou error avec des callbacks.
La méthode success va affiche un modal pendant 3 sec et on va vider les champs du formulaire (pour l'error c'est pareil)

mail.php créé le header du mail pour que ce soit un mail propre. C'est le script qui va renvoyer 'success' pour le retour d'Ajax
La réponse sera encodé en JSON pour faciliter de traitement 

### Animation
Ajouter une petite animation avec JS. Utilisation des modal dans les components bulma
utiliser le modal card quand on appuie sur le bouton contactez moi
on colle le code entre le banner et le about. Son display est a none. 
En cliquant sur le bouton contactez moi on veut le passer a block. 
On va donc utiliser du JQuery
Pour ça on ajoute un id au bouton

dans main.js on créé les callback d'action sur les boutons
(on remplace le bouton de is-success en is-link pour récupérer le bleu)

Voir la video sur les menu en jquery pour changer la couleur en fonction du fond


### Responsive
Chercher css media queries 
on peut faire plein de media queries pour faire des petits arrangements pour tous les écrans

Autre balise que l'on peut mettre dans le index.html dans le head, une meta name viewport pour adapter aux devices de n'importe quel résolution de tel:

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">

il faudra quand même faire des petites retouches responsive

### Hébergement
Pour un site vitrine sans gestion de données derrière, l'offre kimsufi de OVH est suffisante

### Next

google analytics pour les stats
"ojar" pour voir ou l'utilisateur clique ou pas
drift pour le système de chatbot

en général fonctionne avec une balise meta et un code apres inscription
