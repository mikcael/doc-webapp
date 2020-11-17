# Git

## Install (Linux)

    $ sudo apt-get install git-core

On peut aussi installer gitk, interface graphique

## Configuration

Pour la coloration syntaxique :

    $ git config --global color.diff auto
    $ git config --global color.status auto
    $ git config --global color.branch auto

Configurer l'utilisateur :

    $ git config --global user.name "votre_pseudo"
    $ git config --global user.email moi@email.com

Le fichier de config est ici `~/.gitconfig` qui contient aussi les alias :

    ci = commit
    co = checkout
    st = status
    br = branch

## Fonctionnement général

               <--- push
Repo Remote                 Repo local -> working directory 
               ---> pull

Le remote est partagé avec tous les dev, le local est vu par un dev:

+ Le développeur travaille dans son répertoire et commit ses modifications dans le repo local
+ Le repo local est "push" dans le repo remote pour partager avec tout le monde

## Création

Depuis un existant :

    $ git clone http://github.com/xxx/yyy.git

Sans rien dans le répertoire qui portera le nom du repo :

    $ git init 

La commande va créer un répertoire caché `.git` pour la gestion.
L'option `--bare` va permettre de faire de ce dépôt le dépôt serveur qui peut être accessible via SSH comme suit:

    $ git clone ssh://utilisateur@monserveur.domaine.com/chemin/vers/le/depot/git // À exécuter sur votre machine.


## Les commandes usuelles

Voir les fichier modifiés :

    $ git status 

Voir les différences dans les fichiers :

    $ git diff
    $ get diff <filename>

Ajouter des fichiers au repo local :

    $ git add <filename1> <filename2>
    $ git commit

Pour commiter tout les fichiers modifés :

    $ git commit -a

Pour commiter quelques fichiers :

    $ git commit <filename1> <filename2>

Pour voir l'historique :

    $ git log

Pour corriger une petite erreur sur le message d'un commit récent:

    $ git amend

pour annuler un dernier commit :

    $ git reset HEAD^

Avec:
HEAD : dernier commit
HEAD^ : avant-dernier commit
HEAD^^ : avant-avant-dernier commit
HEAD~2 : avant-avant-dernier commit (notation équivalente)
d6d98923868578a7f38dea79833b56d0326fcba1 : indique un numéro de commit précis
d6d9892 : indique le même commit si unique

Pour annuler le dernier commit ET les changements effectués dans les fichiers :

    $ git reset --hard HEAD  // annule le commit et perd tout les changements

Pour annuler les modifs depuis le dernier commit:

    $ git checkout <filename>

Supprimer un ficher (après l'avoir add) avant le commit :

    $ git reset HEAD -- <filename>

Télécharger depuis le repo remote :

    $ git pull

Envoyer les modifs du repos local en ligne :

    $ git push

Penser à vérifier ce qu'on envoit avant avec `git log -p`

Annuler un commit publié:

    $ git revert <id_commit>
    $ git push

## Les branches

Créer une branche locale :

    $ git branch <nom_branche>

Supprimer une branche :

    $ git branch -d <nom_branche>
    $ git branch -D <nom_branche> // pour supprimer la branche et perdre tout les changements

Changer de branche :

    $ git checkout <nom_branche> // ou master par expemple

Merger les modifications :

    $ git merge <nom_brnache>  // mergée dans master

Pour ne pas commiter les fichiers à chaque fois qu'on change de branche :

    $ git stash
    ...
    $ git stash apply // quand on revient dans la branche

## Les tags

    $ git tag <id> <id_commit>
    $ git push --tags

Supprimer un tag :

    $ git tag -d <id>