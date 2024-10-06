
import React, { Dispatch, SetStateAction } from "react";
import { fetchIngredientSuggestions, fetchIngredientName } from "../lib/data";
import { Ingredient } from "../lib/definitions";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export default function SearchSuggestions({query, ingredientsList, tableIngredientsMap, setAddedIngredients}:
     {query: string,
      ingredientsList: Ingredient[],
      tableIngredientsMap: Map<number, Ingredient>,
      setAddedIngredients: Dispatch<SetStateAction<Map<number, Ingredient>>>;
      }) {
    
    function handleOnClick(value : Ingredient)
    {
        const newMap = new Map(tableIngredientsMap)
        newMap.set(tableIngredientsMap.size, value);

        
        setAddedIngredients(newMap);
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
                            <ChevronDoubleDownIcon className="h-4 w-4" onClick={() => handleOnClick(item)}>Add</ChevronDoubleDownIcon>  
                        </div>
                    )
            })}
        </>
    )
}