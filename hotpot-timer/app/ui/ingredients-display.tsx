'use client'
import { useState } from "react";
import { Ingredient } from "../lib/definitions";
import SearchSuggestions from "./search-suggestions";
import Table from "./table";

export default function IngredientsDisplay({query, ingredientsList} : {query: string, ingredientsList: Ingredient[]}) {

    const [tableIngredientsMap, setTableIngredientsMap] = useState<Map<number, Ingredient>>(new Map());

    return (
        <>
        <div className="relative">
          <SearchSuggestions 
            query={query} 
            ingredientsList={ingredientsList}
            tableIngredientsMap = {tableIngredientsMap}
            setAddedIngredients={setTableIngredientsMap}
          >  
          </SearchSuggestions>
          </div>
          <div className='relative'>
            {tableIngredientsMap.size > 0 && <Table tableIngredientsMap={tableIngredientsMap} setAddedIngredients={setTableIngredientsMap}></Table>}
          </div>
        </>
    )

}