# Pokemon API

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



