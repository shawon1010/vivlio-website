import axios from "axios";
import capitalizeFirst from "./capitalizeFirst";

async function dictonary(word = "hello") {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const definition = {};

    axios.get(url).then((response) => {
        try {
            const [def] = response.data;
            definition = {
                word: capitalizeFirst(word),
                ipa: def.phonetics[0].text,
                partOfSpeech: def.meanings[0].partOfSpeech,
                definition: def.meanings[0].definitions[0].definition,
            };
        } catch (error) {
            console.error(error);
        }
    });

    console.log(definition);
    return definition;
}

export default dictonary;
