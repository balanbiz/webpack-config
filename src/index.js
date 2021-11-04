import "./styles/index.scss";

const elvenShieldRecipe = {
	leatcherStrips: 2,
	ironIngot: 1,
	refinedMoonstone: 4
};

const elvenGauntLetsRecipe = {
	...elvenShieldRecipe,
	leather: 1,
	refinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elvenGauntLetsRecipe);