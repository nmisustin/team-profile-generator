const Prompt = require("./lib/Prompt")
const fs = require("fs");
function writeHtml(data){
    fs.writeFile("./generatedHtml/index.html", data, err =>{
        if(err){
            throw err;
        }
        console.log("Web Page generated!")
    })
}
async function init(){
    const answer = await Prompt();
    writeHtml(answer);
}
init();