const fs = require("fs")

async function fetch(url, filePath){
    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error("Zaprosi sxal ka:");
        const html = await response.text();
        fs.writeFileSync(filePath, html);
        console.log("Amen inch lav e...")
    } catch (error) {
        console.log("some error");
    }
}

fetch( "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs", "AGBU.html");