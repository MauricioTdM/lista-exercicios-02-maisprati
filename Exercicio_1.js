// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require("prompt-sync")()

function ehAnoBissexto(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true
    } else {
        return false
    }
}

function ehDataValida(day, month, year) {
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if ((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && year >= 1) {
        if (month == 2 && ehAnoBissexto(year)) {
            if (day <= 29) {
                return true
            } else {
                return false
            }
        } else {
            if (day <= daysInMonth[month]) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

const dia = prompt("Digite o dia: ")
const mes = prompt("Digite o mes: ")
const ano = prompt("Digite o ano: ")

console.log(ehDataValida(dia, mes, ano))
