
const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}
const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 3,
}

import { useState } from 'react'

const Recipe = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elvenGauntletRecipe)}>Elven Gauntlet Recipe</button>
            <ul>
                {Object.keys(recipe).map((ingredient, i) => {
                    return (
                        <li key={i}>{ingredient} : {recipe[ingredient]}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Recipe