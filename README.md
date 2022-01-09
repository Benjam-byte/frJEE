# Application QCM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.
This project was generated with java version 11

## Installation 

Cloner le depot : 
Il contient un sub-module il faut donc utiliser la commande suivante `git clone https://gricad-gitlab.univ-grenoble-alpes.fr/2021mastermiashs/projet2.git --recurse-submodules`

Vider la base de données : 
se rendre dans le dossier du projet avec un cmd et utiliser `del qcmdb.*` ou `rm qcmdb.*` (windows ou linux)

Generer le front-end :
se rendre dans le dossier du sub-modules nommée FRJEE et utiliser la commande : `npm i`

## Lancer le projet 

Demarrer le back-end :
Dans le dossier du projet `mvn clean package payara-micro:start`

Demarrer le front-end : 
Dans le dossier du sub-module `ng serve`. Navigate to `http://localhost:4200/`.


## Scénario d'utilisation 

### Avec Post-man
Toutes les requetes sont aussi disponible avec post-man mais nous vous conseillons l'utilisation du front qui les reprend toutes. 

### Avec le front-end 

Se rendre à l'adresse `http://localhost:4200/`.
Se connecter avec le bouton "login". 

#### En tant qu'enseignant 

se connecter avec les informations suivantes. [login : david@gmail.com & mdp : divad ]
Vous arriverez alors sur la page contentant tous les qcms de cette enseignant il est alors possible d'en selectionner un. 
Si il est encore possible de modifier la liste d'inscrit (ce qui n'est pas le cas de tout les qcms) vous pouvez alors supprimer directement 1 ou plusieurs inscrits.
Si vous souhaitez en rajouter il suffit de cliqué sur le bouton "ajouter".
Depuis cette page l'enseignant peu observer quels sont les etudiants disponible et ajouter ou remplacer une liste. 

#### En tant qu'etudiant 

se connecter avec les informations suivantes. [login : helene@gmail.com & mdp : eneleh ] 
Vous arriverez alors sur la page contenant tous les qcms disponible actuellement pour l'etudiant il est alors possible d'en selectionner un.
Sur cette page vous pouvez alors répondre aux question et appuyer sur valider pour retourner sur la page principale. 
Il est aussi possible de consulter ses résultats depuis le header et le bouton "Resultats". 

#### Bonus 

Les comptes de connexion proposé sont simplement les plus fournis il en existe d'autre disponible ce n'est pas une tentative de caché des problemes ! 

## Fonctionnalité back-end

## Fonctionnalité front-end 
-Authentification avec le serveur et gestion du token JWT tout au long de la session
-En fonction du type d'utilisateur modification de l'interface evitant ainsi de permettre de mauvaise manipulation
-Toutes les requetes develloppé dans le back-end sont reutilisés
-Gestion de feedback et actualisation des modifications via un etat local des composants
-Toutes les erreurs des requetes post/patch/put sont catcher et prisent en compte
-Le systeme de navigation entre les différents composants se combine avec le service d'authentification
-Interface responsive (plus ou moins) 