# Pokemon API

`git clone https://github.com/SebastienLcmt/PokemonAPI.git`

> Ce projet a été créé dans le cadre de mes études de l'IT-Akademy à Lyon. 
> Il a été codé en HTML / CSS, et en Javascript natif.
> Ce fut ma **première tentative** de consommation d'API, et je suis plutôt heureux du résultat.

Source : [Pokeapi](https://pokeapi.co/)


## Description 

Comme on peut s'y attendre, ce projet permet de visualiser tous les pokémons d'une génération. En revanche, je n'ai pas inclus les générations au-delà de la cinquième, à cause du manque de données fournies par l'API (pas d'images par exemple). 

### Menu

Je suis conscient que le menu est un peu lourd, et ressemble à ce qu'il se faisait il y a 15 ans, donc appelons le "vintage". 

Il offre la possibilité de trier les pokémons par élément, de rechercher un pokémon spécifique en cherchant son nom, ainsi que de séléctionner une autre génération.

Le header est "responsive". Pas la meilleure responsivity, mais compte tenu du temps alloué pour la réalisation du projet, ça fait le travail. 

### Container

Je suis assez content du container. Les couleurs pour les éléments donnent un joli rendu, et les images au format SVG fournies par l'API sont parfaites pour les cartes.

On peut retourner une carte en la survolant, et ainsi voir des informations sur le Pokémon, comme sa taille, son poids, et ses capacités (avec une traduction douteuse).


## Problèmes résolus

- Les capacités des pokémons ne s'affichaient pas toujours à la création des cartes à cause de petits retards de l'API (je pense), mais j'ai pu résoudre ce problème grâce à un setTimeout sur la création des cartes. 

- J'ai dû trouvé une façon dynamique de stocker les données reçues, afin d'éviter un nouvel appel à l'API à chaque fois qu'on souhaite revoir une génération. La solution que j'ai trouvée est un peu farfelue, mais a résolu ce soucis. 

## Points d'amélioration

- La responsivity du header n'est pas exceptionnelle, surtout en approchant des tailles d'écran mobiles.

- Je suis sûr que le code Javascript pourrait être plus propre (et le code en général), mais mes connaissances à ce jour sont limitées. Chaque chose en son temps.






# Pokemon API (english)

`git clone https://github.com/SebastienLcmt/PokemonAPI.git`

> This project was created as part of my studies at the IT-Akademy in Lyon. 
> It was coded in Html/CSS and native JS.
> It was my **first time** fetching and laying out data from an API, and I'm quite happy with the result.

Source : [Pokeapi](https://pokeapi.co/)


## Description 

As you would expect from such a project, you can have a look at all the pokemons within a generation, although not all of them, as the API lacks data beyond the fifth one (images for example). 

### Menu

I know the menu would have looked good like 15 years ago, so let's just call it vintage. 

It offers the possibility to sort pokemons by elements, to search for a specific pokemon by typing its name, or to switch to another generation. 

The header is responsive. Not the best you will ever see, but it does the job. 

### Container

I am quite happy with how the container turned out. The colors look nice, and the svg images provided by the API were perfect for the cards. 

By hovering a card, you can flip it and it will show you the pokemon's height, weight and abilities.



## Problems Solved

- The abilities wouldn't always show up at the cards creation due to delays from the API, but a setTimeout fixed it. 

- I had to find a way to dynamically store the fetched data so that loading a generation a second time wouldn't imply calling the API again. 

## Points of Improvements

- The header's responsivity is not great, especially when approching mobile screen sizes.

- I am sure the JavaScript code (and the code in general) could be way cleaner, but my knowledge at the time is limited. Everything in due time !



