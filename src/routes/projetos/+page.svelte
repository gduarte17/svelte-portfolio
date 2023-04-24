<script>
    import Card from "./Card.svelte";
</script>

<div class="main">
    <h1>projetos</h1>
    <div>
        <Card interno={true} href="calculator" imgLink="calculadora.jpg" page='calculadora' imgCover={true}>
            <p slot="description">esse projeto é uma calculadora 
                em que é possível fazer contas um pouco mais complexa, sendo capaz de efetuar operações
                compostas, com mais de um tipo de operação de uma única vez e também o uso de 
                parênteses</p>
        </Card>
        <Card interno={false} href='https://gduarte17.github.io/Pokedex/' 
        imgLink="pokedex.jpg" page="pokédex" imgCover={false}>
            <p slot="description">esse simples projeto é um estudo do uso de API's, nesse caso usei a PokeAPI, e 
                é possível obter algumas informações interessantes sobre qualquer pokémon, é só digitar o número
                correspondente a ele na pokédex
            </p>
        </Card>
    </div> 
</div>

<style>
    .main {
        padding-top: 75px;
        color: white;
    }

    .main div {
        display: flex;
    }

    h1 {
        margin: 0;
        padding-top: 20px;
    }

    p {
        margin: 1rem;
        font-size: .875rem;
    }
</style>