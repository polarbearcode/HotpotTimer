import { sql } from '@vercel/postgres';
import { Ingredient } from './definitions';

export async function fetchIngredientName() {
    const data = await sql<Ingredient>`SELECT * FROM ingredients;`
    const nameList = data.rows.map(item => {
        return {name: item.name, cook_time: item.cook_time, cook_descr: item.cook_descr};
    })

    return nameList;

}

export async function fetchIngredientSuggestions(query:string) {
    const data = await sql<Ingredient>`
        SELECT name FROM ingredients
        WHERE (lower(name) LIKE lower(${query + '%'}));
    `
    const nameList = data.rows.map(item => {
        return item.name;
    })

    return nameList;
}