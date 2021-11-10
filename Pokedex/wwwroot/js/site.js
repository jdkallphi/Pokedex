let pokedexFunc = () => {
    var pokedex = document.getElementById("pokedex");
    pokedex.classList.add('pokedex-transform');
    pokedex.classList.remove('pokedex-transform-normal');

}

let transformPokedex = () => {
    var pokedex = document.getElementById("pokedex");
    var pokemonimg = document.getElementById("pokemonimg");
    var blueled = document.getElementById("BlueLed");
    var pokedexcover = document.getElementById("pokedex-cover");
    blueled.onclick = function () {
        pokedex.classList.toggle("pokedex-transform");
        pokedex.classList.toggle('pokedex-transform-normal');
        if (pokedex.classList.contains('pokedex-transform-normal')) {
            pokemonimg.classList.remove('pokemon');
            pokemonimg.classList.add('pokemon-out');
        }
        else if (!pokedexcover.classList.contains("is-pokedex-open")) {
            pokemonimg.classList.add('pokemon');
            pokemonimg.classList.remove('pokemon-out');
        }
    };
}
function waitForElement(elementId, callBack) {
    window.setTimeout(function () {
        var element = document.getElementById(elementId);
        if (element) {
            callBack(elementId, element);
        } else {
            waitForElement(elementId, callBack);
        }
    }, 500)
}
waitForElement('pokedex', function () {
    pokedexFunc();
});
waitForElement('BlueLed', function () {
    transformPokedex();
});
