'use client'
import { useState } from "react";
import { Ingredient } from "../lib/definitions";
import SearchSuggestions from "./search-suggestions";
import Table from "./table";

export default function IngredientsDisplay({query, ingredientsList} : {query: string, ingredientsList: Ingredient[]}) {
    const placeholderTableData: Ingredient[] = [{name: "Food", cook_time: 1, cook_descr: "long"}];
    const [addedIngredients, setAddedIngredients] = useState<Ingredient[]>(placeholderTableData);
    return (
        <>
        <div className="relative">
          <SearchSuggestions 
            query={query} 
            ingredientsList={ingredientsList}
          
            setAddedIngredients={setAddedIngredients}
          >  
          </SearchSuggestions>
          </div>
          <div className='relative'>
            {<Table ingredientsList={addedIngredients}></Table>}
          </div>
        </>
    )

}