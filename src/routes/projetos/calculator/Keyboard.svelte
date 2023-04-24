<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";
    
    const dispatch = createEventDispatcher();
    
    const numberClicked = (num: number) => {
        dispatch('numberClicked', {
            numberPressed: `${num}`
        })
    }
    
    const opsClick = (symbol: string) => {
        dispatch('operationClicked', {
            operation: `${symbol}`
        })
    }

    const negative = () => {
        dispatch('negativeClicked')
    }


    const clearCursor = () => {
        dispatch('clearCursor')
        // countOperation = ''
        // displayCount = ''
        // isOperationClicked = false
        // isNumberAdded = false
        // isResultPressed = false
        // isDotClicked = false
        // parenthesisManagement('zero')
        // exportCount(displayCount)
        // countToDisplay(countOperation)
    }

    const parenthesisButton = () => {
        dispatch('parenthesisClicked')
    }

    const percentButton = () => {

    }

    const resultButton = () => {
        dispatch('resultClicked')
    }


    function exportCount(currentCount: string) {
        dispatch('countChanged', {
            count: `${currentCount}`
        });
    }

    function countToDisplay(finalCount: string) {
        dispatch('countToDisplay', {
            countToDisplay: `${finalCount}`
        })
    }
</script>

<main>
    <div class="keyboard">
        <Button value='C' className='button' functionName={clearCursor} />
        <Button value='( )' className='button' functionName={parenthesisButton} />
        <Button value='%' className='button' functionName={percentButton} />
        <Button value='÷' className='operations' functionName={() => opsClick('÷')} />
        
        <Button value='7' className='' functionName={() => numberClicked(7)} />
        <Button value='8' className='' functionName={() => numberClicked(8)} />
        <Button value='9' className='' functionName={() => numberClicked(9)} />
        <Button value='x' className='operations' functionName={() => opsClick('x')} />
        
        <Button value='4' className='' functionName={() => numberClicked(4)} />
        <Button value='5' className='' functionName={() => numberClicked(5)} />
        <Button value='6' className='' functionName={() => numberClicked(6)} />
        <Button value='-' className='operations' functionName={() => opsClick('-')} />
        
        <Button value='1' className='' functionName={() => numberClicked(1)} />
        <Button value='2' className='' functionName={() => numberClicked(2)} />
        <Button value='3' className='' functionName={() => numberClicked(3)} />
        <Button value='+' className='operations' functionName={() => opsClick('+')} />
        
        <Button value='+/-' className='operations' functionName={negative} />
        <Button value='0' className='' functionName={() => numberClicked(0)} />
        <Button value='.' className='' functionName={() => opsClick('.')} />
        <Button value='=' className='operations' functionName={resultButton} />
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        /* padding-top: 25px; */
    }

    .keyboard {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin: auto;

        /* --width: 12em;
        width: var(--width);
        left: calc(50% - var(--width) / 2); */
    }
</style>