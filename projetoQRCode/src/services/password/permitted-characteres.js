async function permittedCharacteres(){
    let permitted = [];

    if(process.env.UPPERCASE_LETTER === true){
        chacteres.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(process.env.LOWERCASE_LETTER === true){
        chacteres.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBER === true){
        chacteres.push(..."0123456789")
    }

    if(process.env.SPECIAL_CHARACTERES === true){
        chacteres.push(..."!@#$%&*_=+")
    }
}

export default permittedCharacteres