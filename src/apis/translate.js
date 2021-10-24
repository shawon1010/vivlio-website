async function translate(q = "hello world", target = "es") {
    let translated = {};
    try {
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q,
                source: "en",
                target,
            }),
            headers: { "Content-Type": "application/json" },
        });
        translated = await res.json();
    } catch (error) {
        console.error(error);
    }
    console.log(translated);
    return translated;
}

export default translate;
