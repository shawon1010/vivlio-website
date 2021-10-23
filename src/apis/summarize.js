import axios from "axios";

async function summarize(summary_percent, text) {
    let options = {
        method: "POST",
        url: "https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1",
        headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "text-analysis12.p.rapidapi.com",
            "x-rapidapi-key":
                "3e7823cc03msh5912058d11424abp14c021jsnac86c56ce0af",
        },
        data: {
            language: "english",
            summary_percent,
            text,
        },
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

export default summarize;
