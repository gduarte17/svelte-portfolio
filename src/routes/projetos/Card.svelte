<script>
    export let page = '';
    export let imgLink = ''

    export let description = '';

    export let imgCover = true;

    export let interno = true;
    export let href = '';

    import "../../../static/calculadora.jpg"
    import "../../../static/pokedex.jpg"
</script>

<div class="card">
    <img class="{ imgCover ? 'cover' : 'contain' }" src={imgLink} alt="">
    <slot name="description"></slot>
    {#if interno}
        <a href='/projetos/{href}'>{page}</a>
    {:else}
        <a target="_blank" href={href}>{page}</a>
    {/if}
</div>

<style>
    .card {
        margin-top: 3rem;
        margin-right: 3rem;
        border: 2px solid transparent;
        border-radius: .5em;
        max-width: 255px;
        padding: 1rem;
    }

    .card:hover {
        border: 2px solid #9861ff;
        transition: .3s;
    }

    .card img {
        height: 175px;
        width: 250px;
        border: .5px solid #9861ff;
        border-radius: .5em;
    }

    .cover {
        object-fit: cover;
        object-position: top;
    }

    .contain {
        object-fit: contain;
        object-position: center;
    }

    .card a {
        text-decoration: none;
        color: white;
        margin: 1rem;
        font-size: 1.5em;
    }

    .card a:hover {
        color: #9861ff;
        transition: .3s;
    }
</style>