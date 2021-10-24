import axios from "axios";
import capitalizeFirst from "./capitalizeFirst";

async function dictonary(word = "hello") {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const definition = {
        word: capitalizeFirst(word),
        ipa: "",
        partOfSpeech: "",
        definition: "",
    };

    axios.get(url).then((response) => {
        try {
            const [def] = response.data;
            definition.ipa = def.phonetics[0].text;
            definition.partOfSpeech = def.meanings[0].partOfSpeech;
            definition.definition = def.meanings[0].definitions[0].definition;
            console.log(definition);
        } catch (error) {
            console.error(error);
        }
    });

    return definition;
}

export default dictonary;
