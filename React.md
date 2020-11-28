# React

## Prérequis

* NodeJs
* yarn : `$ curl -o- -L https://yarnpkg.com/install.sh | bash` si pas d'utilisation de npm


Pour compiler le JSX : [babel](https://babeljs.io)
Pour builder le projet : [webpack](https://webpack.js.org)

## Créer une App 

Avec l'outils [create-react-app](https://github.com/facebook/create-react-app) qu'il n'est pas nécessaire de télécharger.

    $ npx create-react-app my-app
    $ cd my-app
    $ npm start

L'App est dispo à l'adresse : http://localhost:3000/ 

En gros dans la structure du projet React on a :

> public/index.html : contient le **title** et le `<div id="root"></div>`

> src/index.js : contient des imports (React, ReactDOM et App noramment) et le `ReactDOM.render(...` qui fait le lien entre la div root et l'App React qui va s'installer dedans. Ce fichier pourrait inclure directement la classe App

> src/App.js : contient l'application a proprement parlé à développer

> package.json : contient des infos d'identifications, de versions et les scripts notammant build et start

/!\ EN React on ne manipule pas le DOM nous même, on laisse React gérer l'affichage donc pas d'`#id` js classique et de `querySelector`

## Build d'une app

    $ npm run build

Puis transfert du contenu du répertoire `build` sur le serveur web (voir cet [article](https://stackoverflow.com/questions/56054235/how-to-fix-the-white-screen-after-build-with-create-react-app/56055153))

## Deploiement sur Node

**/!\** Il faut que le code suit dans le répertoire `build` sur le serveur 
Peut être passer par un :

    $ ln -s ../public build

## React Bootstrap

https://react-bootstrap.github.io

    $ npm install react-bootstrap bootstrap

Exemples d'import:

    import Button from 'react-bootstrap/Button';
    // or less ideally
    import { Button } from 'react-bootstrap';

Importer le css bootstrap:

    import 'bootstrap/dist/css/bootstrap.min.css'

Tester en ajoutant un bouton avec le jsx:

    <Button>Test</Button>

Autre méthode, utiliser le Bootstrap original:

    import './bootstrap.min.css';
Après avoir copier le fichier télécharger

## Attacher un comportement à un bouton
`onClick`, qui va perdre le this une `fois` dans la fonction. 3 solutions:
* `.bind(this)`dans le `onClick={this.handleClick.bind(this)}`
* une fonction fléchée dans le `onClick={()=> this.handleClick()}`
* déclaré une fonction fléché comme propriété: `handleClick = () => {...}`puis `onClick={this.handleClick}`

La fonction fléchée garde le `this`.

une fonction déclarée avec `const` dans une classe est une fonction à part entière, on ne peut pas l'appeler avec `this`, si il n'y a pas `const` c'est une propriété de classe et s'appelle avec `this`.

/!\ Une fonction liée à un évènement (sur un click par exemple) reçoit en paramètre l'évènement !
=> Pour passer un paramètre, on va donc utliser une fonction fléchée sur le `onClick` pour maitriser les paramètres de la fonction appelée:

    onClick={()=>this.handleDelete(item.id)}

Si comme dans le cas du `submit` d'un formulaire on passe l'event, penser à commencer la fonction par `event.preventDefault();` pour éviter le rechargement dela page.

## Modifier le state
le `state` ne peut pas être modifié directement sinon React ne le reconnait pas. Il faut utiliser `setState` et travailler sur des copies.

Pour modifier un tableau par exemple il faut en faire une copie c-a-d:
* `const copie = this.state.tableau.slice()` fonctionne
* `const copie = this.state.tableau` ne fait pas de copie, ça revient au même que manipuler directement `this.state.tableau`

Le code :
`this.setState({tableau : copie})` ou si le nom de la variable locale est identique au nom de la propriété du state : `this.setState({tableau})`


## Manipuler les tableaux
* `.push()` ajoute un élément
* `.slice()` copie un tableau. S'écrit aussi `const copie = [...ancien]` (c'est le spread operator)
* `.splice(x,y)` retire y éléments à partir de l'index x au tableau
* `.findIndex()`
* `.map(item => (...) )` parcours le tableau pour appliquer du code sur chaque `item`

## Accéder à un champs dans un formulaire
Une solution peu apprécié des dev react : 
* `maRef = React.createRef();` dans la classe 
* `ref={this.maRef}` dans l'inupt 
* `this.maRef.current.value` pour y accéder

La solution la plus courante est d'uiliser une nouvelle valeur dans le state. Pour le lier sur l'input du formulaire:

    <Form.Control value={this.state.newItem} onChange={this.handleChange} ...

L'accès à la donner dans le `handleChange` : `event.currentTarget.value`

## Les props
Pour passer des paramètres entre classe.
* Dans le composant appelant : `<Item details={item} />` avec `details` le nom que l'on choisi pour la props
* Dans le composant appelé : `{this.props.details.id}` avec `id` une donnée d'un `Item`

On peut également passé un comportement (une fonction), ce qui donne dans l'appelant:

    <Item details={item} onDelete={this.handleDelete}/>

Donc `handleDelete` de l'appelant est accessible par `this.props.onDelete` dans l'appelé

## Les functional components
Recommandé par React. Lorsque l'affichage est prédictif et qu'il n'y a pas de state. Permet de meilleurs perf

## Le destructuring
Pour faciliter l'écriture et décomposer en un coup un ensemble d'élements, comme par exemple pour les props:

    const details = this.props.details;
    const onDelete = this.props.onDelete

Ré-écrit plus vite en destructuring :

    const { details, onDelete} = this.props;

## Les hooks
Ils servent notamment a gérer un state dans un FC.
La tendance sur React est de ne coder que des FC + hooks ce qui équivaut à une classe stateful

Il faut utiliser pour cela un hook : `useState` à importer avant toute chose.

Plus besoin de gérer les `state`, plus besoin de gérer le `this`

Exemple d'un compteur :

    import React, {useState} from "react";

    const Counter = props => {
        const tableau = useState(1);     // on assigne la valeur par défaut de la donnée
        const compteur = tableau[0];     // on récupère la valeur de la donnée
        const setCompteur = tableau[1];  // On assigne une fonction qui comme le setState, rappelera le rendu

        // const [compteur, setCompteur] = useState(1);

        const handleChange = () => {
            setCompteur(compteur+1);
        }

        return(
            <div>{compteur} <button onClick={handleChange}>Incrémenter</button></div>
        );
    };

    export default Counter;

`setCompteur` va mettre à jour le compteur et rappelé le rendu '`handleChange`n'est pas obligatoire

## NavBar & SPA

    $ npm install react-router-dom --save

Cf cet [article](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm)

## FontAwesome

Installation:

    $ npm i --save @fortawesome/fontawesome-svg-core
    $ npm install --save @fortawesome/free-solid-svg-icons
    $ npm install --save @fortawesome/free-brands-svg-icons
    $ npm install --save @fortawesome/react-fontawesome

Importation:

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCoffee } from '@fortawesome/free-solid-svg-icons'

Utilisation:

    <FontAwesomeIcon icon={faCoffee} size="4x"/>

## Google Map React
Installation

    npm install --save google-map-react

Importation

    import GoogleMapReact from 'google-map-react';

[Exemples d'utilisation](https://www.npmjs.com/package/google-map-react)

## Mapbox

Installation

    npm install --save mapbox-gl

Inclure le CSS

    <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />

Le code

    import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlrY2FlbCIsImEiOiJja2hwYTAwNXIzZWR2MnRsNjQydHZobXMzIn0.hNbVZA7O8gf8uIsibHfP6w';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });

Avec un access token:

    pk.eyJ1IjoibWlrY2FlbCIsImEiOiJja2hwYTAwNXIzZWR2MnRsNjQydHZobXMzIn0.hNbVZA7O8gf8uIsibHfP6w


Sur du HTML :

    <script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />


    <div id='map' style='width: 400px; height: 300px;'></div>
    <script>
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlrY2FlbCIsImEiOiJja2hwYTAwNXIzZWR2MnRsNjQydHZobXMzIn0.hNbVZA7O8gf8uIsibHfP6w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    </script>

[MapBoxGL js](https://docs.mapbox.com/mapbox-gl-js/api/)
[Autre exemple](https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/)
[The good one](https://visgl.github.io/react-map-gl/docs/get-started/get-started) 