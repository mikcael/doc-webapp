# Bulma

## Import

CDN : 

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">

## Les classes principales
Classe `block` : diplay block avec du margin pour que les div soit séparée

Bulma gère les différences entre les titres avec des classes et pas avec `h1` et `h2`. 
Utiliser les classes `title`, `subtitle` et on peut ajouter les classes `is-1`, `is-2` ....
le `h1` reste bon pour le SEO

La classe `content` pour les `p` permettent de mettre des espaces (du padding) autour du texte.
Pareil pour gérer la taille du texte avec les classes `is-small`, `is-medium`, `is-large`

## Les boutons:
Classe `button` pour le bouton par défaut,  mais pour avoir 
* les couleurs on peut ajouter `is-primary` `is-link` `is-success` ...
* les tailles `is-small` `is-medium` `is-large`
* les etats `disable` `is-loading` `is-outlined`

## Les tags
Se fait avec les span, classe tag et is-primary ... comme les boutons. Pour faire des étiquettes non clickable

On peut faire une petite box :
div class box

## Les notifications:
div classe notification, on peut ajouter is-primary .... 

## Systeme de container
div class container : propose des margin pour centrer un peu plus et pas etre coller au bord

## La grille
div class container
div class columns
div class column (a multiplier par le nb de colonne)
on peut aussi gérer les taille, par exemple is-four-fifth

## Les formulaires
class field pour entourer un formulaire
    label class label
    div control
    input type text class input 

## Général
on peut créer des tableaux, des cadres, des messages ...

Bulma vient nativement avec des icones (de font awesome) voir la doc dans elements icon (en important font awesome)

Bulma est plus léger que Bootstrap et se concentre sur l'essential. Avec un compilo comme webpack c'est très léger