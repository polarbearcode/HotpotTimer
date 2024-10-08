'use server'

import { z } from "zod";
import Form from "../ui/create-ingredient-form";
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export type State = {
    errors?: {
 
      name?: string[];
      cook_time?: string[];
      cook_descr?: string[];
    };
    message?: string | null;
  };
  
  const FormSchema = z.object({
    name: z.string({
      invalid_type_error: 'Please enter a name',
    }),
    cook_time: z.coerce
      .number()
      .gt(0, { message: 'Please enter an amount greater than 0.' }),
    cook_descr: z.enum(['short','long', 'medium'], {
      invalid_type_error: 'Please select a description for the cook time.',
    }),
  });



export async function createIngredient(prevState: State, formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        name: formData.get("name"),
        cook_time: formData.get("cook-time"),
        cook_descr: formData.get('cook-descr')
    })

      // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Ingredient.',
    };
  }

  const { name, cook_time, cook_descr } = validatedFields.data;

   // Insert data into the database
   try {
    await sql`
      INSERT INTO ingredients (name, cook_time, cook_descr)
      VALUES (${name}, ${cook_time}, ${cook_descr})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error);
    return {
      message: 'Database Error: Failed to Create Ingredient.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/');
  redirect('/');
}

