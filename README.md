# Projet Programmation Web Côté Serveur (PWCS)
# Projet 2021 - 2022 : Création d'un service de passation de QCM
### Auteur : Benjamin MITTON & Cédric PINARD
### Technologie : Back JEE & Front Angular
### Enseignant : Jérôme DAVID
 
#### Build with @angular/cli 13.0.2
#### Build with JAVA 11
#### Dernière modification : 21/12/21 13:10
 
***
 
## Installation du projet
 
## Prérequis
- NodeJS LTS
- @angular/cli 13.0.2
- JAVA 11
 
## Installation
 
### Cloner le dépôt :
- Il contient un sub-module il faut donc utiliser la commande suivante `git clone https://gricad-gitlab.univ-grenoble-alpes.fr/2021mastermiashs/projet2.git --recurse-submodules`
 
### Supprimer la base de données (si elle existe déjà) :
- Se rendre dans le dossier du projet avec un invité de commande et utiliser les commandes suivantes :
    - Windows : `del qcmdb.*`
    - Linux ou MacOS : `rm qcmdb.*`
 
### Installation dépendances front-end :
- Se rendre dans le dossier du sub-modules nommée frJEE et utiliser la commande : `npm i`
 
### Installation Angular :
- `npm i -g @angular/cli`
 
## Lancer le projet
 
### Démarrer le back-end :
- Dans le dossier du projet taper la commande : `mvn clean package payara-micro:start`
 
### Démarrer le front-end :
- Dans le dossier du sub-module (frJEE) taper la commande : `ng serve`.
- Ouvrir le lien `http://localhost:4200/`.
 
***
 
## Fonctionnalités développées
 
### Back-end
 
#### Rôles
Il y a deux types d'utilisateurs, les enseignants et les étudiants, ces deux types sont exclusifs, c'est-à-dire qu'un utilisateur ne peut posséder qu'un seul et unique rôle.
 
#### JWT
Les tokens JWT mis en place permettent de transférer les informations de connexion ainsi que le rôle de l'utilisateur de manière sécurisée.
Ces derniers ont une durée de validité d'une heure.
Ils permettent de contrôler l'accès aux données, en fonction du mail qu'ils contiennent et aux différentes requêtes en fonction du rôle qu'ils contiennent.
 
#### Controller :
 
- ##### ExempleEtUtils :
    - init(@Context UriInfo uriInfo) :
        - HTTP : POST
        - URL : projetqcm/data/utils/init
        - Description :  initialise la base de données avec un jeu de données prédéfini
        - Return : void
 
- ##### QCMApplication :
    - authenticate(@QueryParam("email") String email, @QueryParam("passwd") String password) :
        - HTTP : POST
        - URL : projetqcm/data/login
        - Description : génère un token si les informations de connexion sont valides
        - Return : Response
 
- ##### QCM (enseignant) :
    - getExam() :
        - HTTP : GET
        - URL : projetqcm/data/qcm
        - Description : retourne tous les QCM d'un enseignant (identité vérifiée avec JWT)
        - Return : List<ExamDetails>
    - getInscrits(@PathParam("id") long examId) :
        - HTTP : GET
        - URL : /projetqcm/data/qcm/{id: [0-9]+}/inscrits
        - Description : retourne tous les inscrits à un QCM d'un enseignant (identité vérifiée avec JWT)
        - Return : List<InscritDetails>
    - setInscrits(@PathParam("id") long examId, long[] etuId) :
        - HTTP : PUT
        - URL : /projetqcm/data/qcm/{id: [0-9]+}/inscrits
        - Description : remplace tous les inscrits par la liste en paramètre (etuId) à un QCM d'un enseignant (identité vérifiée avec JWT)
        - Return : Response
    - addInscrit(@PathParam("id") long examId, long[] etuId) :
        - HTTP : PATCH
        - URL : /projetqcm/data/qcm/{id: [0-9]+}/inscrits
        - Description : ajoute la liste (etuId) en paramètre aux inscrits d'un QCM d'un enseignant (identité vérifiée avec JWT)
        - Return : Response
    - deleteAllInscrit(@PathParam("id") long examId) :
        - HTTP : DELETE
        - URL : /projetqcm/data/qcm/{id: [0-9]+}/inscrits
        - Description : supprime tous les inscrits d'un QCM d'un enseignant (identité vérifiée avec JWT)
        - Return : Response
    - deleteOneInscrit(@PathParam("id") long examId, @PathParam("etuId") long etuId) :
        - HTTP : DELETE
        - URL : /projetqcm/data/qcm/{id: [0-9]+}/inscrits/{etuId: [0-9]+}
        - Description : supprime un inscrit (etuId) d'un QCM d'un enseignant (identité vérifiée avec JWT)
        - Return : Response
 
- ##### QCMEnCours (étudiant) :
    - getAllExamEnCours() :
        - HTTP : GET
        - URL : projetqcm/data/qcmencours
        - Description : retourne tous les QCM en cours d'un étudiant (identité vérifiée avec JWT)
        - Return : List<ExamDetails>
    - getOneExamEnCours(@PathParam("examId") long examId) :
        - HTTP : GET
        - URL : /projetqcm/data/qcmencours/{examId: [0-9]+}
        - Description : génère ou récupère la copie d'un QCM (examId) pour un étudiant (identité vérifiée avec JWT)
        - Return : CopieExam
    - getOneQuestion(@PathParam("examId") long examId, @PathParam("questionId") int questionId) :
        - HTTP : GET
        - URL : /projetqcm/data/qcmencours/{examId: [0-9]+}/questions/{questionId: [0-9]+}
        - Description : récupère une question (questionId) d'une copie d'un QCM (examId) pour un étudiant (identité vérifiée avec JWT)
        - Return : CopieQuestion
    - cocheChoix(@PathParam("examId") long examId, @PathParam("questionId") int questionId, @PathParam("choixId") long choixId) :
        - HTTP : POST
        - URL :  /projetqcm/data/qcmencours/{examId: [0-9]+}/questions/{questionId: [0-9]+}/choix/{choixId: [0-9]+}
        - Description :  coche un choix (choixId) d'une question (questionId) d'une copie d'un QCM (examId) pour un étudiant (identité vérifiée avec JWT)
        - Return : Response
    - decocheChoix(@PathParam("examId") long examId, @PathParam("questionId") int questionId, @PathParam("choixId") long choixId) :
        - HTTP : DELETE
        - URL :  /projetqcm/data/qcmencours/{examId: [0-9]+}/questions/{questionId: [0-9]+}/choix/{choixId: [0-9]+}
        - Description : decoche un choix (choixId) d'une question (questionId) d'une copie d'un QCM (examId) pour un étudiant (identité vérifiée avec JWT)
        - Return : Response
 
- ##### QCMPasse (étudiant) :
    - getAllExamPasseJava() :
        - HTTP : GET
        - URL : /projetqcm/data/qcmpasse
        - Description : retourne les QCM passé et leur notes d'un étudiant (identité vérifiée avec JWT)
        - Return : List<ExamNote>
 
    - getAllExamPasseSQL() :
        - ne fonctionne pas
 
### Front-end
 
#### Technologies
 
Pour le front-end, nous avons choisi le framework Angular. La raison d'ailleurs est double. Premièrement la facilité de gestion des éléments du DOM par rapport à des données non stockées localement. La deuxième raison est de pouvoir utiliser des services. Les services permettent entre autres de conserver l'état d'une variable tout au long de la navigation entre les pages. Le JWT est donc stocké de manière efficace et sans avoir besoin de le faire passer de page en page au risque de l'afficher.
La librairie utilisée pour lier le back et le front est Axios. La raison derrière ce choix est bien évidemment sa facilité d'utilisation et sa grande popularité dans le domaine.
 
 
#### Fonctionnalités :
- Authentification avec le serveur et gestion du token JWT tout au long de la session
- En fonction du type d'utilisateur modification de l'interface évitant ainsi de permettre à l'utilisateur d'accéder à des requêtes qui ne correspondent pas à son rôle
- Toutes les requêtes développées dans le Back-end sont utilisées
- Gestion de feedback et actualisation des modifications via un etat local des composants
- Toutes les erreurs des requêtes post/patch/put sont catchées et prises en compte
- Le système de navigation entre les différents composants se combine avec le service d'authentification
- Interface responsive (plus ou moins)
 
***
 
## Scénario d'utilisation
 
### Initialisation
 
Avec postman lancer la requête :
- init(@Context UriInfo uriInfo) :
    - HTTP : POST
    - URL : projetqcm/data/utils/init
 
### Avec Postman
Toutes les requêtes sont aussi disponible avec postman mais nous vous conseillons l'utilisation du front qui les reprend toutes.
 
### Avec le front-end
 
Se rendre à l'adresse `http://localhost:4200/`.
Se connecter avec le bouton "login".
 
#### En tant qu'enseignant
 
- Se connecter avec les informations suivantes. [login : david@gmail.com & mdp : divad ]
- Vous arriverez alors sur la page contenant tous les qcms de cet enseignant, il est alors possible d'en sélectionner un.
- S'il est encore possible de modifier la liste d'inscription (ce qui n'est pas le cas pour tous les qcms), vous pouvez alors supprimer directement 1 ou plusieurs inscrits.
- Si vous souhaitez en rajouter il suffit de cliquer sur le bouton "ajouter".
- Depuis cette page l'enseignant peut observer quels sont les étudiants disponibles et ajouter ou remplacer une liste d'inscrits.
 
#### En tant qu'étudiant
 
- Se connecter avec les informations suivantes. [login : helene@gmail.com & mdp : eneleh ]
- Vous arriverez alors sur la page contenant tous les qcms disponibles actuellement pour l'étudiant, il est alors possible d'en sélectionner un.
- Sur cette page vous pouvez alors répondre aux questions et appuyer sur valider pour retourner sur la page principale.
- Il est aussi possible de consulter ses résultats depuis le header et le bouton "Résultats".
 
#### Bonus
 
- Les comptes de connexion proposés dans le scénario sont simplement les plus fournis afin d'exécuter un maximum de requêtes, il en existe d'autres disponibles dans la rubrique Login ci-dessous.
- Nous vous invitons à essayer de réaliser une requête qui ne devrait pas marcher, nous avons traiter toutes les exceptions possibles (enfin on pense).  
 
 
#### Login
 
- cedric :
    - mail : cece@gmail.com
    - password : cirdec
    - role : etudiant
- benjamin :
    - mail : benji@gmail.com
    - password : nimajneb
    - role : etudiant
- jerome :
    - mail : jerome@gmail.com
    - password : emorej
    - role : enseignant
- david :
    - mail : david@gmail.com
    - password : divad
    - role : enseignant
- goliath :
    - mail : goliath@gmail.com
    - password : htailog
    - role : etudiant
- hercule :
    - mail : hercule@gmail.com
    - password : elucreh
    - role : etudiant
- ulysse :
    - mail : ulysse@gmail.com
    - password : essylu
    - role : etudiant
- achille :
    - mail : achille@gmail.com
    - password : ellihca
    - role : etudiant
- narcisse :
    - mail : narcisse@gmail.com
    - password : essicran
    - role : etudiant
- helene :
    - mail : helene@gmail.com
    - password : eneleh
    - role : etudiant