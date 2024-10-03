import { sql } from '@vercel/postgres';
import { Ingredient } from './definitions';

export async function fetchIngredientName() {
    const data = await sql<Ingredient>`SELECT name FROM ingredients;`
    const nameList = data.rows.map(item => {
        return item.name;
    })

    return nameList;

}

export async function fetchIngredientSuggestions(query:string) {
    console.log(query);
    const data = await sql<Ingredient>`
        SELECT name FROM ingredients
        WHERE (lower(name) LIKE lower(${query + '%'}));
    `
    const nameList = data.rows.map(item => {
        return item.name;
    })

    return nameList;
}