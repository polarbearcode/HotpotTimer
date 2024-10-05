
import React, { Dispatch, SetStateAction } from "react";
import { fetchIngredientSuggestions, fetchIngredientName } from "../lib/data";
import { Ingredient } from "../lib/definitions";

export default function SearchSuggestions({query, ingredientsList, setAddedIngredients}:
     {query: string,
      ingredientsList: Ingredient[],
      setAddedIngredients: Dispatch<SetStateAction<Ingredient[]>>;
      }) {


    const tableIngredients = [];
    
    function handleOnClick(value : Ingredient)
    {
        
        setAddedIngredients(addedIngredients => [...addedIngredients, value]);
    }

    var filteredList: Ingredient[] = [];

    if (query) {
        
        filteredList = ingredientsList.filter(item => {
            return item.name.startsWith(query);
        })
    } 
    

    return (
       
        <>
            {filteredList.map((item, key) => {
                
                    return (
                        <div className="flex"key={key}>
                            <p>{item.name}</p>
                            <button className="ml-2" onClick={() => handleOnClick(item)}>Add</button>  
                        </div>
                    )
            })}
        </>
    )
}