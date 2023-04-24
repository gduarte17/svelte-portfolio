<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import Display from './Display.svelte'
	import Keyboard from './Keyboard.svelte';

    import { plusMinusOperations, multiplyDivideOperations} from "./operations";
    
    let isOperationClicked = false;
    let isNumberAdded = false;
    let isResultPressed = false;
    let isDotClicked = false;
    
    let isParenthesisOpened = false;
    let openedParenthesisCounter = 0;
    
    let operationsClicked: string = '';
    let operation: string;
    let displaySymbol: string;
    let countOpsSymbol = ''

    export let countOperation: string = '';
    export let displayCount: string = '';

    let display: string;
    function getCount(event: any) {
        display = event.detail.count;
    }

    let calculationString: string;
    function displayCalculation(event: any) {
        calculationString = event.detail.countToDisplay
    }


    function numClick(num: number) {
        let number = num.toString()

        if (isResultPressed) {
            clearCursor();
        }

        if (isOperationClicked) {
            isOperationClicked = false
            countOperation += number
            displayCount += ' ' + number
            exportCount(displayCount)
        }
        else if (isDotClicked) {
            countOperation += number
            displayCount += number
            exportCount(displayCount)
        }
        else if (displayCount.charAt(displayCount.length - 1) == '(') {
            countOperation += number
            displayCount += number
            exportCount(displayCount)
        }
        else if (displayCount.charAt(displayCount.length - 1) == ')') {
            countOperation += '*' + number
            displayCount += ' x ' + number
            exportCount(displayCount)
        }
        else {
            countOperation += number
            displayCount += number
            isOperationClicked = false
            exportCount(displayCount)
        }
        isNumberAdded = true
    }

    const opsClick = (symbol: string) => {
        if (symbol == '+') {
            operation = 'plus'
            displaySymbol = ' +'
            countOpsSymbol = '+'
        }
        else if (symbol == '-') {
            operation = 'minus'
            displaySymbol = ' -'
            countOpsSymbol = '-'
        }
        else if (symbol == 'x') {
            operation = 'multiply'
            displaySymbol = ' x'
            countOpsSymbol = '*'
        }
        else if (symbol == '÷') {
            operation = 'divide'
            displaySymbol = ' /'
            countOpsSymbol = '/'
        }
        else if (symbol == '.') {
            operation = 'dot'
            displaySymbol = '.'
            countOpsSymbol = '.'
        }

        if (isNumberAdded && !isOperationClicked && operation!='dot') {
            countOperation += countOpsSymbol
            displayCount += displaySymbol;
            exportCount(displayCount)

            isOperationClicked = true
            isNumberAdded = false
            isDotClicked = false
            if (!(operationsClicked.includes(operation))) {
                operationsClicked += operation + ' ';
            }
        }

        else if (isNumberAdded && isOperationClicked && operation!='dot') {
            isOperationClicked = false

            countOperation += countOpsSymbol
            displayCount += displaySymbol
            exportCount(displayCount)

            isOperationClicked = true
            isNumberAdded = false
            isDotClicked = false
            if (!(operationsClicked.includes(operation))) {
                operationsClicked += operation + ' '
            }
        }
        else if (operation == 'dot' && isDotClicked) {
            alert('Esse número já tem ponto flutuante!');
        }
        else if (!isNumberAdded && operation == 'dot') {
            countOperation += '0' + symbol
            displayCount += '0' + symbol
            exportCount(displayCount)

            isDotClicked = true
        }
        else if (isNumberAdded && operation == 'dot') {
            countOperation += symbol
            displayCount += symbol
            exportCount(displayCount)

            isDotClicked = true
        }
        else if (displayCount.charAt(displayCount.length - 1) == ')') {
            countOperation += countOpsSymbol
            displayCount += displaySymbol;
            exportCount(displayCount)

            isOperationClicked = true
            isNumberAdded = false
            isDotClicked = false
            if (!(operationsClicked.includes(operation))) {
                operationsClicked += operation + ' '
            }
        }
        else if (displayCount.charAt(displayCount.length - 1) == '(') {
            if (operation == 'minus') {
                countOperation += countOpsSymbol
                displayCount += displaySymbol
                exportCount(displayCount)
                
                isOperationClicked = true
                isNumberAdded = false

                if (!(operationsClicked.includes(operation))) {
                    operationsClicked += operation + ' '
                }
            }
            else {
                console.log('Formato inválido')
            }
        }
        else {
            alert('É necessário inserir um número primeiro!')
        }
    }

    const negative = () => {
        if (countOperation.charAt(countOperation.length - 1) == ')' || countOperation.charAt(countOperation.length - 1).match(/\d/g)) {
            countOperation += '*(-'
            displayCount += 'x (-'
            exportCount(displayCount)
            parenthesisManagement('opening')
        }
        else if (countOperation.charAt(countOperation.length - 1) == '(') {
            countOperation += '(-'
            displayCount += '(-'
            exportCount(displayCount)
            parenthesisManagement('opening')
        }
        else if (countOperation.charAt(countOperation.length - 1).match(/(\*|\/|\+|\-)/)) {
            countOperation += '(-'
            displayCount += ' (-'
            exportCount(displayCount)
            parenthesisManagement('opening')
        }
        else {
            countOperation += '(-'
            displayCount += '(-'
            exportCount(displayCount)
            parenthesisManagement('opening')
        }
    }

    const clearCursor = () => {
        countOperation = ''
        displayCount = ''
        isOperationClicked = false
        isNumberAdded = false
        isResultPressed = false
        isDotClicked = false
        parenthesisManagement('zero')
        exportCount(displayCount)
        countToDisplay(countOperation)
    }

    const parenthesisButton = () => {
        if (isResultPressed) {
            clearCursor()
            countOperation += '('
            displayCount += '('
            exportCount(displayCount)
            parenthesisManagement('opening')
        }
        else if (!isParenthesisOpened) {
            if (displayCount.charAt(displayCount.length - 1) == ')' || displayCount.charAt(displayCount.length - 1).match(/\d/g)) {
                countOperation += '*('
                displayCount += ' x ('
                exportCount(displayCount)
                parenthesisManagement('opening')
            }
            else if (isOperationClicked) {
                countOperation += '('
                displayCount += '('
                exportCount(displayCount)
                parenthesisManagement('opening')
                isOperationClicked = false
            }
            else {
                countOperation += '('
                displayCount += '('
                exportCount(displayCount)
                parenthesisManagement('opening')
            }
        }
        else if (isParenthesisOpened && !isNumberAdded && !isOperationClicked) {
            if (displayCount.charAt(displayCount.length - 1) == '(') {
                countOperation += '('
                displayCount += '('
                exportCount(displayCount)
                parenthesisManagement('opening')
            }
            else if (displayCount.charAt(displayCount.length - 1) == ')') {
                countOperation += ')'
                displayCount += ')'
                exportCount(displayCount)
                parenthesisManagement('closing')
            }
            // SUSPEITO QUE O CÓDIGO ABAIXO NÃO POSSA SER EXECUTADO POIS O ENCADEAMENTO DE CONDIÇÕES...
            // NÃO PERMITE
            // else if (isOperationClicked) {
            //     displayCount += '('
            //     parenthesisManagement('opening')
            //     isOperationClicked = false
            // }
        }
        else if (isParenthesisOpened && isNumberAdded) {
            countOperation += ')'
            displayCount += ')'
            exportCount(displayCount)
            parenthesisManagement('closing')
        }
        else if (isOperationClicked) {
            countOperation += '('
            displayCount += '('
            exportCount(displayCount)
            parenthesisManagement('opening')
            isOperationClicked = false
        }
        isNumberAdded = false;
    }

    const parenthesisManagement = (action: string) => {
        if (action == 'opening') {
            openedParenthesisCounter += 1
        }
        else if (action == 'closing') {
            openedParenthesisCounter -= 1
        }
        else if (action == 'zero') {
            openedParenthesisCounter = 0
        }

        if (openedParenthesisCounter <= 0) { isParenthesisOpened = false } else { isParenthesisOpened = true }
    }

    const resultButton = () => {
        if (isParenthesisOpened) {
            for (let i = 0; i < openedParenthesisCounter; i++) {
                countOperation += ')';
                displayCount += ')';
            }
            isParenthesisOpened = false;
            openedParenthesisCounter = 0;
            exportCount(countOperation);
        }
        let wholeCount = countOperation;
        // countOperation = wholeCount;

        while (wholeCount.includes('(')
        || wholeCount.includes('*')
        || wholeCount.includes('/')
        || wholeCount.includes('+')
        || wholeCount.includes('-')) {
            if(wholeCount.includes('(')) {
                let howManyOpenParenthesis = wholeCount.match(/\(/g)?.length;

                for (let i = 0; i < howManyOpenParenthesis!; i++) {
                    let lastOpenParenthesis = wholeCount.lastIndexOf('(')
                    let firstClosingParenthesis = wholeCount.indexOf(')', lastOpenParenthesis)

                    let inParenthesisCalculation = wholeCount.slice(lastOpenParenthesis + 1, firstClosingParenthesis);
                    let stringParameterToReplacement = wholeCount.slice(lastOpenParenthesis, firstClosingParenthesis + 1);

                    if(stringParameterToReplacement.includes('(-')) {
                        let firstOperation = stringParameterToReplacement.slice(2)
                        firstOperation = firstOperation.split(/(\+|\-|\*|\/|\))/)[1] //IMPORTANTE NOTAR ESSE '[1] NO FINAL, O QUE TORNA A EXPRESSAO DO TIPO STRING E NAO DO TIPO STRING[]'

                        let indexOps = stringParameterToReplacement.indexOf(firstOperation)

                        let numToReplace = stringParameterToReplacement.slice(2,indexOps)
                        let negativeNumber = /[-]([0-9]*[.])?[0-9]+/
                        inParenthesisCalculation = inParenthesisCalculation.replace(negativeNumber, '_' + numToReplace)
                    }

                    let toCalculate = inParenthesisCalculation.split(/(\+|\-|\*|\/)/g)

                    multiplyDivideOperations(toCalculate);
                    plusMinusOperations(toCalculate);

                    wholeCount = wholeCount.replace(stringParameterToReplacement, toCalculate.toString())
                    exportCount(wholeCount)
                    countToDisplay(displayCount)
                }
            }
            else {
                let stringParameterToReplacement = wholeCount
                let toCalculate = wholeCount.split(/(\+|\-|\*|\/)/g);

                multiplyDivideOperations(toCalculate)
                plusMinusOperations(toCalculate)

                wholeCount = wholeCount.replace(stringParameterToReplacement, toCalculate.toString())
                exportCount(wholeCount)
                countToDisplay(displayCount)
            }
        }

        if (wholeCount.includes('_')) {
            wholeCount = wholeCount.slice(1)
            wholeCount = (parseFloat(wholeCount) * -1).toString()
            exportCount(wholeCount)
        }

        isResultPressed = true
        operationsClicked = ''
        isDotClicked = false
    }

    const delClick = () => {
        let stringCursor = countOperation
        if(stringCursor.length == 1) {
            clearCursor()
        }
        else if (stringCursor.length > 1) {
            if (stringCursor.charAt(stringCursor.length - 1).match(/\d/g)) {
                if (stringCursor.charAt(stringCursor.length - 2).match(/\d/g)) {
                    countOperation = stringCursor.slice(0, -1)
                    displayCount = displayCount.slice(0, -1)
                }
                else if (!stringCursor.charAt(stringCursor.length - 1).match(/\d/g) && stringCursor.charAt(stringCursor.length - 2) != '.') {
                    countOperation = stringCursor.slice(0, -1)
                    displayCount = displayCount.slice(0, -1)
                    if (stringCursor.charAt(stringCursor.length - 2) == '*'
                    || stringCursor.charAt(stringCursor.length - 2) == '/'
                    || stringCursor.charAt(stringCursor.length - 2) == '+'
                    || stringCursor.charAt(stringCursor.length - 2) == '-') {
                        isOperationClicked = true
                    }
                    isNumberAdded = false
                }
                else if (!stringCursor.charAt(stringCursor.length - 2).match(/\d/g) && stringCursor.charAt(stringCursor.length - 2) == '.') {
                    countOperation = stringCursor.slice(0, -1)
                    displayCount = displayCount.slice(0, -1)
                    isDotClicked = true
                }
            }
            else if (stringCursor.charAt(stringCursor.length - 1) == '(') {
                countOperation = stringCursor.slice(0, -1)
                displayCount = displayCount.slice(0, -1)
                if (stringCursor.charAt(stringCursor.length - 2).match(/\d/g)) {
                    isNumberAdded = true
                }
                else if (stringCursor.charAt(stringCursor.length - 2) == '*'
                || stringCursor.charAt(stringCursor.length - 2) == '/'
                || stringCursor.charAt(stringCursor.length - 2) == '+'
                || stringCursor.charAt(stringCursor.length - 2) == '-') {
                    countOperation = stringCursor.slice(0, -1)
                    displayCount = displayCount.slice(0, -1)
                    isOperationClicked = true
                }

                parenthesisManagement('closing')
            }
            else if (stringCursor.charAt(stringCursor.length - 1) == ')') {
                countOperation = stringCursor.slice(0, -1)
                displayCount = displayCount.slice(0, -1)
                if (stringCursor.charAt(stringCursor.length - 2).match(/\d/g)) {
                    isNumberAdded = true
                }

                parenthesisManagement('opening')
            }
            else if (stringCursor.charAt(stringCursor.length - 1) == '.') {
                countOperation = stringCursor.slice(0, -1)
                displayCount = displayCount.slice(0, -1)
                isDotClicked = false
            }
            else if (stringCursor.charAt(stringCursor.length - 1) == '*'
            || stringCursor.charAt(stringCursor.length - 1) == '/'
            || stringCursor.charAt(stringCursor.length - 1) == '+'
            || stringCursor.charAt(stringCursor.length - 1) == '-') {
                countOperation = stringCursor.slice(0, -1)
                displayCount = displayCount.slice(0, -1)
                isOperationClicked = false
                if (stringCursor.charAt(stringCursor.length - 2).match(/\d/g)) {
                    isNumberAdded = true
                }
            }
        exportCount(displayCount)
        }
    }

    const exportCount = (currentCount: string) => {
        display = currentCount
    }

    const countToDisplay = (finalCount: string) => {
        calculationString = finalCount
    }
</script>

<div class="Calculator">
    <Display on:delete={delClick} display={display} count={calculationString}/>
    <Keyboard on:numberClicked={(e) => { numClick(e.detail.numberPressed) }}
        on:operationClicked={(e) => { opsClick(e.detail.operation) }}
        on:clearCursor={clearCursor}
        on:resultClicked={resultButton}
        on:negativeClicked={negative}
        on:parenthesisClicked={parenthesisButton}
        />
</div>

<style>
    .Calculator {
        padding-top: 50px;
    }

</style> 