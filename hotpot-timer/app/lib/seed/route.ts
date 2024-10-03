import bcrypt from 'bcryptjs';
import { db } from '@vercel/postgres';
import { ingredients } from '../lib/placeholder-data';

const client = db.connect();

async function seedIngredients() {
    (await client).sql`CREATE TABLE IF NOT EXISTS ingredients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE,
        cook_time DECIMAL(10, 2) NOT NULL,
        cook_descr VARCHAR(50) NOT NULL
        );
    `;

   const insertIngredients = await Promise.all(
        ingredients.map(async (ingredient) => {
            return (await client).sql`
                INSERT INTO ingredients (name, cook_time, cook_descr)
                VALUES (${ingredient.name}, ${ingredient.cook_time}, ${ingredient.cook_descr})
                ON CONFLICT (name) 
                DO UPDATE SET cook_time=EXCLUDED.cook_time, cook_descr=EXCLUDED.cook_descr;
            `;
        }),
    ); 

    return insertIngredients;
}

export async function GET() {
    try {
        (await client).sql`BEGIN`;
        await seedIngredients();
        (await client).sql`COMMIT`;
        return Response.json({message : 'Database seeded'});
    } catch (error) {
        (await client).sql`Rollback`;
        return Response.json({ error }, { status: 500 });
    }
}

