/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

const { Translate } = require("@google-cloud/translate").v2;

const projectId = "valiant-broker-329916";
const keyFilename = "google-cloud.json";
// Creates a client
const translate = new Translate({ projectId, keyFilename });

async function translateText() {
    try {
        const text = "Hello, world!";

        // The target language
        const target = "ru";

        // Translates some text into Russian
        const [translation] = await translate.translate(text, target);
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
    } catch (err) {
        console.error("ERROR:", err);
    }
}

export default translateText;
