<script>
	import { fly } from 'svelte/transition';
	let visible = true;

    $: innerWidth = 0;

    // window.onscroll = function() {scrollFunction()}

    // let sticky = document.getElementById('header')?.offsetTop

    // function scrollFunction() {
    //     if (window.pageYOffset > sticky) {
    //         document.getElementById('header')?.classList.add("sticky");
    //     }
    //     else {
    //         document.getElementById('header')?.classList.remove('sticky')
    //     }
    // }
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<svelte:window bind:innerWidth />

<header id="header">
    <h1>G</h1>
    {#if innerWidth > 480}
        <ol>
            <li>
                <a href="/">
                    <h1>início</h1>
                </a>
            </li>
            <!-- <li>
                <a href="/">
                    <h1>experiências</h1>
                </a>
            </li> -->
            <li>
                <a href="/projetos">
                    <h1>projetos</h1>
                </a>
            </li>
        </ol>
    {:else}
        <div class="hamburger">
            <a href="/">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    {/if}
</header>


<style>
    header {
        display: flex;
        justify-content: space-between;
        color: white;
        max-height: 5em;
        position: relative;
        box-shadow: 0px 2px 1px 0 rgb(152, 97, 255);
    }

    .sticky {
        position: fixed;
        top: 0;
    }

    header h1 {
        margin: .5em .8em;
    }

    ol {
        display: flex;
        padding: 0;
        align-items: center;
    }

    ol li {
        /* list-style: none; */
        margin: 0 1.5em;
        z-index: 1;
    }

    ol li a h1:hover {
        /* background-color: red; */
        color: rgb(152, 97, 255);
        transition: .3s;
    }

    ol li::marker {
        color: rgb(152, 97, 255);
        font-size: 1.2em;
    }

    ol li a {
       text-decoration: none;
       color: white; 
    }

    ol li h1 {
        margin: 0;
        font-size: 1.25em;
    }

    @media (max-width: 480px) {
        header {
            padding: 0 25px;
        }

        header h1 {
            margin: .5em 0;
        }

        .hamburger {
            height: 3em;
            width: 3em;
            display: flex;
            justify-content: end;
            align-items: center;
            margin: .75em 0;
        }

        .hamburger i {
            font-size: 1.5em;
        }
    }
</style>