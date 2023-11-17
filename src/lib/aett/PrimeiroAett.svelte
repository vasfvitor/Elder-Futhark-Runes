<script lang="ts">
  import { blur } from "svelte/transition";
  import type { Card } from "../scripts/Cartas";
  export let over: boolean, runa: Card, idx: number;
</script>

{#key idx}
  <div
    in:blur={{ delay: 600, duration: 300 }}
    out:blur={{ delay: 0, duration: 300 }}
    class="atropos h-[26.25rem] w-[18.75rem] max-h-screen max-w-prose {runa.nome} bg-white p-4 runic-card-atropos mx-auto cursor-default select-none"
  >
    <!-- scale container (required) -->
    <div class=" atropos-scale">
      <!-- rotate container (required) -->
      <div
        class:active={over}
        class="card-frame card-bg atropos-rotate transition-all bg-anim p-2"
      >
        <!-- inner container (required) bg-repeat bg-contain bg-center -->
        <div
          class="atropos-inner rounded relative text-[10rem] text-center bg-black"
        >
        
          <div
            data-atropos-offset="2"
            class="bg-frey {runa.nome} bg-center bg-no-repeat bg-cover w-full h-full"
          >
            <p
              class=" norse flex items-center justify-center texto-detalhe w-12 h-12 absolute top-0 mx-auto left-0 right-0 text-lg"
              class:active={over}
              data-atropos-offset="5"
            >
              {runa.id}
            </p>
            <p
              id="rune_text"
              class:active={over}
              class="runic text-principal absolute inset-x-0 inset-y-[4.735rem]"
              data-atropos-offset="7"
            >
              {runa.ideograma}
            </p>
            <div class="text-box w-12 h-12 top-32 -left-2">
              <p
                class:active={over}
                class="norse text-lg texto-detalhe -mt-1"
                data-atropos-offset="5"
              >
                {runa.fonetico}
              </p>
            </div>
            <div class="text-box w-12 h-12 top-32 -right-2">
              <p
                class:active={over}
                class="norse texto-detalhe text-xl -mt-1"
                data-atropos-offset="5"
              >
                {runa.polaridade}
              </p>
            </div>

            <p
              class:active={over}
              class="norse flex items-center justify-center opacity-100 texto-detalhe h-12 absolute -bottom-2 mx-auto left-0 right-0 text-lg"
              data-atropos-offset="5"
            >
              {runa.nome}
            </p>
            <ul
              data-atropos-offset="2"
              data-atropos-opacity="0.1;0.7"
              class="absolute m-auto top-12 left-0 right-0 text-gray-600 -z-10 norse text-lg"
            >
              <li>Frey</li>
              <li>Freyja</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
{/key}

<style>
  .card-frame {
    border-radius: 7px;
    border-top: 4px groove var(--runic-bg);
    border-bottom: 4px ridge var(--runic-bg);

    border-left: 7px inset var(--active-principal);
    border-right: 7px outset var(--active-principal);
  }

  .border-groove {
    border-style: groove;
  }
  :root {
    --runic-bg: #E121212;
    --shadow-color: white;
    --shadow-color-light: white;
    --active-principal: white;
    --active-secondary: white;
  }

  .FEHU {
    --runic-bg: hsl(51, 100%, 10%);
    --shadow-color: #ffd700;
    --shadow-color-light: red;
    --active-secondary: gold;
    --active-principal: white;
    --secondary-shadow: black;
  }

  .URUZ {
    --runic-bg: hsl(120, 100%, 25%);
    --shadow-color: red;
    --shadow-color-light: white;
    --active-secondary: rgba(228, 110, 0, 0.733);
    --active-principal: hsl(120, 100%, 25%);
    --secondary-shadow: black;
    /* marrom */
  }

  .THURISAZ {
    /* blood color: 8a0303  */
    --runic-bg: #640000;
    --shadow-color: white;
    --shadow-color-light: rgb(15, 12, 12);
    --active-secondary: #ff0000;
    --active-principal: #c00101;
    --secondary-shadow: black;
  }

  .text-principal .texto-detalhe {
    color: white;
    transition: all;
    transition-duration: 400ms;
  }

  .text-box {
    @apply absolute  grid place-items-center;
  }

  .texto-detalhe:not(.active) {
    transition: all;
    transition-duration: 400ms;

    color: white;
    /* opacity: 0.33; */
    font-weight: lighter;
  }
  .texto-detalhe.active {
    transition: all;
    transition-duration: 400ms;
    color: var(--active-secondary);
    border-color: var(--active-secondary);
    opacity: 1;
    font-weight: bolder;
  }

  .text-principal {
    transition: all;
    transition-duration: 400ms;
    text-shadow: -1px 0px 1px #cccccc, 0px -1px 1px #eeeeee,
      -2px -1px 1px #cccccc, -1px -2px 1px #eeeeee, -3px -2px 1px #cccccc,
      -2px -3px 1px #eeeeee, -4px -3px 1px #cccccc;
  }

  .text-principal:not(.active) {
    transition: all;
    transition-duration: 400ms;
    text-shadow: -1px 0px 1px #cccccc, 0px -1px 1px #eeeeee,
      -2px -1px 1px #cccccc, -1px -2px 1px #eeeeee, -3px -2px 1px #cccccc,
      -2px -3px 1px #eeeeee, -4px -3px 1px #cccccc;
  }

  .text-principal.active {
    transition: all;
    transition-duration: 400ms;
    animation: textAnim 4s infinite alternate;
  }

  .bg-anim.active {
    transition: all;
    transition-duration: 400ms;
    animation: runicAnim 4s infinite alternate;
  }
  .bg-anim {
    transition: all;
    transition-duration: 1200ms;
  }

  .mask1 {
    -webkit-mask-image: url(/frame1.png);
    mask-image: url(/frame1.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: cover;
  }

  @keyframes runicAnim {
    30% {
      background-color: black;
    }
    50% {
      background-color: #9b4d00;
      box-shadow: 0 0 60px 10px hsla(30, 100%, 33%, 0.8);
    }
    100% {
      background-color: rgb(105, 0, 0);
      box-shadow: 0 0 60px 10px rgba(97, 0, 0, 0.8);
    }
  }

  @keyframes textAnim {
    0% {
      color: initial;
      text-shadow: initial;
    }
    30% {
      color: black;
      text-shadow: 0 -1px 4px #fff, 0 -2px 10px var(--shadow-color-light),
        0 -10px 20px var(--active-secondary),
        0 -18px 40px var(--active-principal);
    }
    50% {
      color: white;
      text-shadow: 0 -2px 6px #fff, 0 -4px 12px #f00, 0 -12px 24px #ff0,
        0 -20px 44px #ff8000;
    }
    100% {
      color: white;
      text-shadow: 0 -2px 6px #fff, 0 -4px 12px #ff0, 0 -12px 24px #ff8000,
        0 -20px 44px #f00;
    }
  }
  /* 
  .text-principal.active {
    color: var(--active-principal);
    opacity: 1;
    transition: all 0.5s;
    text-shadow: 0px 0px 4px var(--shadow-color-light), 0px 0px 4px var(--shadow-color-light),
    0px 0px 4px var(--shadow-color-light), 0px 0px 12px var(--shadow-color-light),
    0px 0px 4px var(--shadow-color-light), 0px 0px 12px var(--shadow-color-light),
    0px 0px 4px var(--shadow-color-light), 0px 0px 4px var(--shadow-color-light);
    
    /* animation: neon 3s infinite; 
  }

  /*  */

</style>
