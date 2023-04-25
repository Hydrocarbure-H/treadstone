# WhatsBot
## Thomas PEUGNET

# Quitter WhatsApp n'a jamais été aussi facile..

> Pour une raison sombre et ténébreuse, l'envie de quitter les réseaux sociaux peut parfois arriver dans notre esprit, et ne pas spécialement vouloir en repartir.
>
> C'est ce qu'il s'est passé avec WhatsApp. Une volonté de quitter la plateforme est belle et bien présente, mais n'est guère possible au vu de notre interdépendance à la communication.
>
> Comment partir de WhatsApp ? Nous n'aurons plus accès aux conversations de groupe, plus accès aux messages privés de certaines personnes…?

Quitter l'application en elle-même n'a pas été un problème. Cependant, une contrainte s'est rapidement posée. 

Dans une micro-société gérée par un groupe d'individus très restreints, pour des raisons sociales assez évidentes, une application de discussion peut être imposée, en toute démocratie bien entendu. Ceci au mépris-même de principes ou de valeurs que peuvent avoir certains individus de cette micro-société. Mais c'est un fait, le « peuple » a choisi, malgré lui.

WhatsApp étant donc l'application de communication de référence, pourquoi ne pas passer également par là pour toutes les informations officielles ? Malgré un départ de la plateforme, il nous est nécessaire de conserver des informations qui sont diffusées sur cette dernière. Mais, rien ne nous oblige à y répondre, dans la mesure où la démocratie est assurée par un petit groupe d'individus, représentant leur propre personne.

Nous arrivons donc au coeur de notre problème. Comment conserver l'accès à ces informations, mais en continuant à garder une distance avec la plateforme.

Nous allons construire un bot.

# Pistes

Nous souhaitons que les informations qui transitent par WhatsApp soient visibles, et que nous soyons alertés par celles qui sont importantes. (N'allons surtout pas imaginer que toutes les informations y arrivant sont d'une pertinence absolue)

Nous avons commencé par regarder du côté de l'API de WhatsApp, mais, malheureusement cette dernière était payante. Nous nous sommes donc tournés vers une technique moins glamour, mais qui se révèlera payante, le web scrapping.

> « *Le web scraping est une technique d'extraction du contenu de sites Web, via un script ou un programme, dans le but de le transformer pour permettre son utilisation dans un autre contexte comme l'enrichissement de bases de données, le référencement ou l'exploration de données.* » - Wikipédia

# Projet

Pour ce projet, nous avons décidé d'utiliser Python comme langage de programmation. Ayant bien des défauts (ahem les accolades, le typage, l'optimisation..), il possède cependant un nombre de bibliothèques extraordinaire. Dans ces dernières nous noterons notamment Selenium. C'est une bibliothèque permettant de simuler le comportement d'un utilisateur sur un site Internet.

Voici le [lien du répertoire Gitlab](https://gitlab.likir09.fr/DriftKing-DK/whatsbot).

## Extraction des données du site

Pour cette étape, l'inspecteur des éléments aura été notre meilleur ami. L'idée est de trouver quelles sont les divisions contenant les informations que nous souhaitons réceptionner, pour ensuite les analyser avec Python.

Pour récupérer le contenu de ces fameuses divisions, nous utiliserons la fonction `find_elements(By.XPATH)` proposée par Selenium.

Par exemple, pour séléctionner les messages, les informations de date et heures ainsi que les potentielles réponses, nous aurons le code suivant : 

```python
 x_container = ".//div[contains(@data-testid, 'msg-container')]"
 
 x_message = ".//span[contains(@class, 'copyable-text')]"
 x_metadata = ".//div[contains(@class, 'copyable-text')]"
 x_response = ".//div[contains(@data-testid, 'quoted-message')]"
 x_response_text = ".//div/div/span[contains(@class, 'quoted-mention')]"
 x_response_author = ".//div/div/span[not(contains(@class, 'quoted-mention'))]"
```

Dans cette partie, `x_container` est la division qui contient l'intégralité des messages d'une conversation donnée. Lorsque l'on récupère son contenu, nous trouvons une liste de messages (ce qui, jusque là, est assez logique), qu'il nous faut maintenant parser.

À l'aide de `try catch` successifs, nous parvenons à récupérer les différentes informations nécessaires, et à créer une liste de dictionnaires, ces derniers contenant les données de chaque message individuel.

## Traitement de ces données

A présent que les différents messages sont en notre possession, la question se pose de « qu'allons nous bien pouvoir en faire ?! ». Une réponse assez évidente aurait été : Bah, suffit de recréer une application de messagerie, mais qui se contenterait d'afficher les nouveaux messages, sans possibilités d'intéraction. 

Bon, dans ce cas, autant prendre une messagerie existante et compatible avec les webhooks, plutôt que d'en recréer une. Notre choix s'est donc porté sur Discord. Nous abons donc créé un nouveau serveur nommé « WhatsBot », et y avons associé un webhook du même nom.

