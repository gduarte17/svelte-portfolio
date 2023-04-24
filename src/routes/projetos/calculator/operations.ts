export const multiplyDivideOperations = (calculation: string[]) => {
    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] == '*' || calculation[i] == '/') {
            let beforeOperation = calculation[i - 1]
            let afterOperation = calculation[i + 1]
            
            if (beforeOperation.includes('_')) {
                beforeOperation = beforeOperation.slice(1)
                beforeOperation = (parseFloat(beforeOperation) * -1).toString()
            }
            if (afterOperation.includes('_')) {
                afterOperation = afterOperation.slice(1)
                afterOperation = (parseFloat(afterOperation) * -1).toString()
            }

            let numberBeforeOperation = parseFloat(beforeOperation)
            let numberAfterOperation = parseFloat(afterOperation)

            let floatNumberBeforeOps = numberBeforeOperation.toString().split(/\./)
            let floatNumberAfterOps = numberAfterOperation.toString().split(/\./)

            let lengthToFixed = 0;

            if (floatNumberBeforeOps.length > 1 && floatNumberAfterOps.length > 1) {
                if(floatNumberBeforeOps[1].length >= floatNumberAfterOps[1].length) { lengthToFixed = floatNumberBeforeOps[1].length }
                else if(floatNumberAfterOps[1].length >= floatNumberBeforeOps[1].length) { lengthToFixed = floatNumberAfterOps[1].length }
            }
            else if (floatNumberBeforeOps.length > 1 || floatNumberAfterOps.length > 1) {
                if (floatNumberBeforeOps.length > 1) { lengthToFixed = floatNumberBeforeOps[1].length }
                else if (floatNumberAfterOps.length > 1) { lengthToFixed = floatNumberAfterOps[1].length }
            }

            if (calculation[i] == '*') {
                let result: string = (numberBeforeOperation * numberAfterOperation).toFixed(lengthToFixed)

                if (result.includes('.')) {
                    let floating = result.slice(result.indexOf('.') + 1, result.length)
                    let z = floating.length
                    
                    while (i >= 0) {
                        if (floating[i - 1] == '0') {
                            result = result.slice(0, -1)
                        }
                        else if (floating[i - 1] != '0') {
                            break;
                        }
                        i++
                    }
                    if (result.charAt(result.length - 1) == '.') {
                        result = result.slice(0, -1)
                    }
                }

                if (Math.sign(parseFloat(result)) === -1) {
                    let auxiliar = result.split('')
                    auxiliar.shift()
                    result = ('_' + auxiliar.toString()).replaceAll(',', '')
                }

                calculation.splice(i - 1, 3, result.toString());
                i = 0;

                console.log(calculation)
            }

            else if (calculation[i] == '/') {
                let result: string = (numberBeforeOperation / numberAfterOperation).toString();

                if (Math.sign(parseFloat(result)) === -1) {
                    let auxiliar = result.split('')
                    auxiliar.shift()
                    result = ('_' + auxiliar.toString()).replaceAll(',', '')
                }

                calculation.splice(i - 1, 3, result.toString());
                i = 0;
            }
        }

    }
    return calculation
}

export const plusMinusOperations = (calculation: string[]) => {
    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] == '+' || calculation[i] == '-') {
            let beforeOperation = calculation[i - 1]
            let afterOperation = calculation[i + 1]
            
            if (beforeOperation.includes('_')) {
                beforeOperation = beforeOperation.slice(1)
                beforeOperation = (parseFloat(beforeOperation) * -1).toString()
            }
            if (afterOperation.includes('_')) {
                afterOperation = afterOperation.slice(1)
                afterOperation = (parseFloat(afterOperation) * -1).toString()
            }

            let numberBeforeOperation = parseFloat(beforeOperation)
            let numberAfterOperation = parseFloat(afterOperation)

            if (calculation[i] == '+') {
                let result: string = (numberBeforeOperation + numberAfterOperation).toFixed(0);

                if (Math.sign(parseFloat(result)) === -1) {
                    let auxiliar = result.split('')
                    auxiliar.shift()
                    result = ('_' + auxiliar.toString()).replaceAll(',', '')
                }

                calculation.splice(i - 1, 3, result.toString());
                i = 0;
            }
            else if (calculation[i] == '-') {
                let result: string = (numberBeforeOperation - numberAfterOperation).toFixed(0);

                if (Math.sign(parseFloat(result)) === -1) {
                    let auxiliar = result.split('')
                    auxiliar.shift()
                    result = ('_' + auxiliar.toString()).replaceAll(',', '')
                }

                calculation.splice(i - 1, 3, result.toString());
                i = 0;
            }
        }
    }
    return calculation
}