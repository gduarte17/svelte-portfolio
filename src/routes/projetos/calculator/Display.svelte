<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let count = '';
    export let display = '';

    const dispatch = createEventDispatcher();

    function deleteFunction() {
        dispatch('delete');
    }
</script>



<div class="console" >
    <section> 
        <p>{count}</p>
    </section>
    <div class="Display">
        <p dir="ltr">{display}</p>
        <button on:click={deleteFunction}>
            <i class="fa-solid fa-delete-left"></i>
        </button>
    </div>
</div>

<style>
    .console {
        /* width: 20em; */
        margin: 0 auto 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-end;
        width: 16em;
    }

    section p {
        width: 10em;
        margin-bottom: 0;
        min-height: 1.5em;
        padding: 0.25em;
        margin: 0;
        text-align: right;
    }

    .Display {
        /* display: flex;
        align-items: center;
        justify-content: center; */

        display: grid;
        justify-content: center;
        grid-template-columns: 10% 18rem 10%;
        text-align: right;
        width: -webkit-fill-available;
    }

    .Display p {
        color: white;
        border-bottom: 2px solid blueviolet;
        border-radius: 5px;
        width: 12em;
        /* position: absolute; */

        /* --width: 12em;
        width: var(--width);
        left: calc(50% - var(--width) / 2); */

        min-height: 1.5em;
        padding: 0.25em;
        /* margin: 0 auto 0 auto; */
        font-size: 1.5em;

        grid-column-start: 2;
        justify-self: center;
    }

    .Display button {
        background-color: transparent;
        color: white;
        border: 0;
        cursor: pointer;
    }

    .Display button:hover {
        color: #9861ff;
        transition: .3s;
    }

    @media(max-width: 600px) {
        .Display {
            grid-template-columns: 10% 15rem 10%;
        }

        .Display p {
            width: 8em;
        }
    }
</style>