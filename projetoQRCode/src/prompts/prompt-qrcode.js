import chalk from 'chalk'

const promptQRCode = [
    {
        nome: "link",
        description: chalk.yellow.bold(chalk.gray.bold("Digite o link para gerar o QRCode")),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre os formatos: (1. Normal ou 2. Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha apenas enrte 1 ou 2"),
        required: true
    }
];

export default promptQRCode