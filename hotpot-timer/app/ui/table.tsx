'use client'
import { Ingredient } from "../lib/definitions";
import Timer from "@/app/ui/timer";
import { MinusCircleIcon} from '@heroicons/react/24/outline';
import { Dispatch, useState, SetStateAction } from "react";



export default function IngredientsTable({ tableIngredientsMap, setAddedIngredients} :
   {tableIngredientsMap: Map<number, Ingredient>,
    setAddedIngredients: Dispatch<SetStateAction<Map<number, Ingredient>>>
   }) {

  

  function handleOnClick(itemKey: number) {
    const newMap = new Map(tableIngredientsMap);
    newMap.delete(itemKey);
    setAddedIngredients(newMap);

  }
    return (
        <>
        <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="text-2xl px-4 py-5 font-medium sm:pl-6">
                  Food
                </th>
                <th scope="col" className="text-2xl px-3 py-5 font-medium">
                  Timer
                </th>
              </tr>
              
            </thead>
            <tbody className="bg-white">
             
             {Array.from(tableIngredientsMap.entries()).map(([key, value]) => 
              <tr key={key}>
                <td className='text-sm'>{value.name.toLocaleUpperCase()}</td>
                <td><Timer cookTime={value.cook_time}></Timer></td>
                <td><MinusCircleIcon className="h-4 w-4" onClick={() => handleOnClick(key)}></MinusCircleIcon></td>
                
              </tr>
            )}

        



                          
            </tbody>
        </table>
        
        </>
    )
}