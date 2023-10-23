<script lang="ts">
  import { blur } from "svelte/transition";
  import type { Card } from "../Cartas";
  export let over: boolean, runa: Card, idx: number;
</script>

{#key idx}
  <div
    in:blur={{ delay: 600, duration: 300 }}
    out:blur={{ delay: 0, duration: 300 }}
    class="atropos h-[26.25rem] w-[18.75rem] max-h-screen max-w-prose {runa.nome} bg-white rounded-[2rem] p-4 runic-card-atropos mx-auto cursor-default select-none"
  >
    <!-- scale container (required) -->
    <div class=" atropos-scale">
      <!-- rotate container (required) -->
      <div
        class=" atropos-rotate border-gold magic transition-all bg-blood rounded-3xl border-2 border-solid p-2"
      >
        <!-- inner container (required) bg-repeat bg-contain bg-center -->
        <div
          class=" atropos-inner rounded-2xl relative text-[10rem] text-center bg-black/75"
        >
          <div
            data-atropos-offset="2"
            class="rounded-xl border-black bg-frey {runa.nome} bg-center bg-no-repeat bg-cover w-full h-full"
          >
            <p
              class:active={over}
              class="runic text-principal absolute inset-x-0 inset-y-12 drop-shadow-[0_0px_12px_rgba(255,255,255,0.5)]"
              data-atropos-offset="7"
            >
              {runa.ideograma}
            </p>
            <p
              class:active={over}
              class="norse texto-detalhe absolute top-32 left-2 in text-lg"
              data-atropos-offset="5"
            >
              {runa.fonetico}
            </p>
            <p
              class:active={over}
              class="norse texto-detalhe absolute top-32 right-2 text-2xl"
              data-atropos-offset="5"
            >
              {runa.polaridade}
            </p>
            <p
              class:active={over}
              class="norse texto-detalhe top-4 absolute m-auto left-0 right-0 text-lg"
              data-atropos-offset="5"
            >
              {runa.numero}
            </p>
            <p
              class:active={over}
              class="norse texto-detalhe absolute m-auto left-0 right-0 bottom-4 text-lg"
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
<div />

<style>
  :root {
    --shadow-color: white;
    --shadow-color-light: black;
    --active-principal: white;
    --active-secondary: white;
  }

  .FEHU {
    --shadow-color: #ffd700;
    --shadow-color-light: red;
    --active-secondary: gold;
    --active-principal: white;
  }

  .URUZ {
    --shadow-color: red;
    --shadow-color-light: white;
    --active-secondary: rgba(155, 75, 0, 0.733);
    --active-principal: green;
    /* marrom */
  }

  .THURISAZ {
    /* blood color: 8a0303  */
    --shadow-color: white;
    --shadow-color-light: rgb(15, 12, 12);
    --active-secondary: #8a0303;
    --active-principal: #8a0303;
  }

  .text-principal .texto-detalhe {
    color: white;
  }
  .texto-detalhe {
    @apply w-12 h-12;
  }

  .texto-detalhe:not(.active) {
    opacity: 0.33;
    transition: all 0.2s;
    font-weight: lighter;
  }

  .text-principal:not(.active) {
    text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
    opacity: 1;
    transition: all 0.2s;
  }

  .texto-detalhe.active {
    color: var(--active-secondary);
    opacity: 1;
    transition: all 0.2s;
    font-weight: bolder;
  }

  .text-principal.active {
    transition: all 0.2s;
    color: #ffffff;

    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
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
