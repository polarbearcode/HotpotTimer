
import { Dispatch, SetStateAction } from "react";
import { fetchIngredientSuggestions, fetchIngredientName } from "../lib/data";
import { Ingredient } from "../lib/definitions";

export default function SearchSuggestions({query, ingredientsList, setAddedIngredients}:
     {query: string,
      ingredientsList: Ingredient[],
      setAddedIngredients: Dispatch<SetStateAction<Ingredient[]>>;
      }) {

    
    function handleOnClick(value : {
        name: string; cook_time: number, cook_descr: 'long' | 'short' | 'medium'
    }) {
        ingredientsList.push({name: value.name, cook_time: value.cook_time, cook_descr: value.cook_descr});
        setAddedIngredients(ingredientsList);
    }

    var filteredList: Ingredient[] = [];

    if (query) {
        filteredList = ingredientsList.filter(item => {
            item.name.startsWith(query);
        })
    } 

    console.log("here");

    

    return (
        <>
            {filteredList.map((item, key) => {
                    <p>{item.name}</p>;
                    <button>Add</button>              
            })}
        </>
    )
}