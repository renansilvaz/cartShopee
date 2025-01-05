import permittedCharacteres from "./permitted-characteres.js";

async function handle(){
    let characteres = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH
    characteres = await permittedCharacteres();

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characteres.length)
        password += characteres[index];
    }
    return password
}

export default handle