import { fetchIngredientSuggestions, fetchIngredientName } from "../lib/data";

export default async function SearchSuggestions({query}: {query: string}) {
    const suggestions = await fetchIngredientSuggestions(query);


    return (
        <>
            {suggestions.map((item, key) => {
                <p>{item}</p>;
            })}
        </>
    )
}