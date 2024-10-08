'use client';

import { useActionState, useState } from "react";
import { createIngredient, State} from "../lib/actions";
import { useFormState } from "react-dom";


export default function Form() {

  
    const initialState = {
        message: '',
        errors: {}
      };
    const [state, formAction] = useFormState(createIngredient, initialState);
 
    return (
        <div className="grid h-16 place-items-center min-h-screen bg-blue-50">
            <form action={formAction}>
                    <div className="mb-1">
                        <h1 className="text-4xl">ADD AN INGREDIENT</h1>.
                    </div>
                    <label className="block text-sm font-medium" htmlFor="name">Ingredient Name</label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="string"                    
                        />
                    </div>

                    <div id="name-error" aria-live="polite" aria-atomic="true">
                     {state.errors?.name &&
                    state.errors.name.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                    </div>
        

                    <label htmlFor="cook-time">
                        Ingredient Cook Time Minutes
                    </label>
                    <div className="relative">
                        <input
                            id="cook-time"
                            name="cook-time"
                            type="number"                    
                        />
                    </div>

                    <div id="cook-time-error" aria-live="polite" aria-atomic="true">
                     {state.errors?.cook_time &&
                    state.errors.cook_time.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                    </div>

                    <label htmlFor="cook_descr">
                        <select name="cook-descr">
                            <option value="" disabled>Select</option>
                            <option key="short" value="short">Short</option>
                            <option key="medium" value="medium">Medium</option>
                            <option key="long" value="long">Long</option>
                        </select>
                    </label>

                    <div id="cook_descr-error" aria-live="polite" aria-atomic="true">
                     {state.errors?.cook_descr &&
                    state.errors.cook_descr.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>

            </form>
        </div>
    )
}