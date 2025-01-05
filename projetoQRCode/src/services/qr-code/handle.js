import qr from 'qrcode-terminal'
import chalk from 'chalk';

async function handle(err, choose){
    if(err){
        console.log("ERROR ON APPLICATION")
        return
    }

    const isSmall = choose.type == 2;
    qr.generate(choose.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green.bold("QRCode gerado com sucesso!\n"))
        console.log(qrcode)
    })
}

export default handle;