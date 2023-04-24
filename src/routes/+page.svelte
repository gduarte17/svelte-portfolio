<script></script>

<section>
    <h3>oi, meu nome é</h3>
    <h1>Gabriel Duarte</h1>
    <p>sou estudante de programação e aqui mostro algumas 
        tecnologias que tenho conhecimento e familiaridade</p>
</section>
<main>
    <!-- <h3>minha formação acadêmica:</h3> -->
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        min-height: 100vh;
    }

    h1, h3, p{
        color: white;
        margin: 0;
    }

    h1 {
        font-size: 4em;
        
    }
    h3 {
        font-size: 2em;
        font-family: 'Alexandria';
        font-weight: 100;
        color: rgb(152, 97, 255);
    }

    p {
        margin-top: 2em;
        max-width: 30em;
    }

    main {
        color: white !important;
    }

    

    /* section div {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-top: 5em;
    } */



    @media(max-width: 480px) {
        section {
            padding: 10em 0;
            margin: 0;
            align-items: flex-start;
            justify-content: center;
            height: auto;
            min-height: auto;
        }

        section h3{
            font-size: 1.2em;
            
        }

        section h1{
            font-size: 2em;
            margin-top: .8em;
        }
    }
</style>
