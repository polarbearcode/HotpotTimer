
import { Ingredient } from "../lib/definitions";
import Timer from "@/app/ui/timer";

export default function IngredientsTable({ ingredientsList} : {ingredientsList: Ingredient[]}) {
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
            {ingredientsList.map((item, index) => (
               <tr>
                <td className='text-sm'>{item.name}</td>
                <td><Timer cookTime={item.cook_time}></Timer></td>
               </tr>
            ))}
               
            </tbody>
        </table>
        
        </>
    )
}