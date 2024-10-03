import Image from "next/image";
import Search from '@/app/ui/search';
import Table from '@/app/ui/table';
import SearchSuggestions from "./ui/search-suggestions";
import { Suspense } from "react";
import { Ingredient } from "./lib/definitions";
import { useState } from "react";
import { fetchIngredientName } from "./lib/data";

export default async function Home({searchParams} : {searchParams: {ingredient: string}}) {

  const ingredientList: Ingredient[] = [{name: "Mushroom", cook_time: 2, cook_descr: "long"}, 
    {name: "tofu", cook_time: 1, cook_descr: "short"}];

  
  return (
   <>
    <div className="flex justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hotpot Timer
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
            Track the ingredients in your hotpot
        </p>
        <div className="relative mt-4 flex flex-col items-center justify-between gap-2 md:mt-8">
          <Suspense>
            <Search placeholder="placeholder" />
          </Suspense>
          <div className="relative">
          <SearchSuggestions query={searchParams.ingredient}></SearchSuggestions>
          </div>
          <div className='relative'>
            {<Table ingredientsList={ingredientList}></Table>}
          </div>
         </div>
      </div>
    </div>
   </>

      
  );
}
