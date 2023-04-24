<script lang="ts">
    export let value: string;
    export let className: string;
    export let functionName: Function;
</script>

<input on:click={(e) => {functionName(e.currentTarget.value)}} type="button" value={value} class={className}>

<style>
    input {
        height: 3.5em;
        width: 4.5em;
        margin: 0.35em;
        border: 0px;
        border-radius: 10px;
        justify-self: center;

        color: white;
        background-color: #26759f;
    }

    input:focus-visible {
        outline: none;
    }

    .operations {
        background-color: #123649 !important;
    }

    .button {
        background-color: #36224f !important;
    }
</style>