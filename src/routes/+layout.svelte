<script>
    import Header from './Header.svelte'
</script>

<Header/>

<div class="body">
    <main class="main">
        <slot/>
    </main>
</div>

<style>
    .body {
        position: absolute;
        top: 0;
        width: 100%;
    }

    .main {
        padding: 0 150px;
        margin: 0 150px;
        min-height: 100vh;
    }

    @media (max-width: 1080px) {
        .main {
            padding: 0 100px;
            margin: 0 5em;
        }
    }

    @media (max-width: 800px) {
        .main {
            padding: 0 50px;
            margin: 0 4em;
        }
    }

    @media(max-width: 480px) {
        .main {
            padding: 0 25px;
            margin: 0;
        }
    }

    /* .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        min-height: 100vh;
    } */
</style>