import chalk from "chalk";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.cyan.bold('Escolha a ferramenta (1. QRCode ou 2. Password)'),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold('Escolha entre 1 ou 2'),
        required: true
    }
]

export default mainPrompt;