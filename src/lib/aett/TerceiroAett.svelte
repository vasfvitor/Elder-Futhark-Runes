<script lang="ts">
  import { blur } from "svelte/transition";
  import type { Card } from "../Cartas";
  export let over: boolean, runa: Card, idx: number;
</script>

{#key idx}
  <div
    in:blur={{ delay: 500, duration: 250 }}
    out:blur={{ delay: 0, duration: 250 }}
    class="atropos h-[26.25rem] w-[18.75rem] max-h-screen max-w-prose {runa.nome} bg-black rounded-[2rem] p-4 runic-card-atropos mx-auto cursor-default select-none"
  >
    <!-- scale container (required) -->
    <div class=" atropos-scale">
      <!-- rotate container (required) -->
      <div
        class=" atropos-rotate border-gold/20 magic transition-all bg-blood/20 rounded-3xl border-2 border-solid p-2"
      >
        <!-- inner container (required) bg-repeat bg-contain bg-center -->
        <div
          class=" atropos-inner shadow-lg shadow-black rounded-2xl relative text-[10rem] text-center bg-black/95 border-2 border-black"
        >
          <div
            data-atropos-offset="-3"
            class="rounded-xl border-black bg-frey {runa.nome} bg-center bg-no-repeat bg-cover w-full h-full"
          >
            <p
              class:active={over}
              class="runic glow absolute inset-x-0 inset-y-12 drop-shadow-[0_0px_12px_rgba(255,255,255,0.5)]"
              data-atropos-offset="8"
            >
              {runa.ideograma}
            </p>
            <p
              class:active={over}
              class="norse show absolute top-32 left-2 in text-lg"
              data-atropos-offset="5"
            >
              {runa.fonetico}
            </p>
            <p
              class:active={over}
              class="norse show absolute top-32 right-2 text-lg"
              data-atropos-offset="5"
            >
              {runa.polaridade}
            </p>
            <p
              class:active={over}
              class="norse show top-6 inset-x-0 text-lg"
              data-atropos-offset="5"
            >
              {runa.numero}
            </p>
            <p
              class:active={over}
              class="norse show absolute bottom-6 inset-x-0 text-lg"
              data-atropos-offset="5"
            >
              {runa.nome}
            </p>
          </div>

          <!-- put your custom content here -->
        </div>
      </div>
    </div>
  </div>
{/key}

<style>
  :root {
    --shadow-color: #ffd700;
    --shadow-color-light: black;
  }

  .FEHU {
    --shadow-color: #ffd700;
    --shadow-color-light: red;
  }

  .URUZ {
    --shadow-color: green;
    --shadow-color-light: red;
    /* marrom */
  }

  .glow {
    color: gold;
  }

  .glow.active {
    color: #ffd700;
    opacity: 1;
    transition: all 0.5s;
    text-shadow: -5px -11px 11px var(--shadow-color-light),
      -5px 11px 11px var(--shadow-color-light),
      5px -11px 11px var(--shadow-color-light),
      5px 11px 11px var(--shadow-color-light),
      10px 10px 10px var(--shadow-color-light),
      0 0 10px var(--shadow-color-light), 0 0 10px var(--shadow-color-light),
      0 0 5px var(--shadow-color), 0 0 20px var(--shadow-color),
      0 0 5px var(--shadow-color), 0 0 20px var(--shadow-color);
    /* animation: neon 3s infinite; */
  }

  .glow:not(.active) {
    color: white;
    opacity: 1;
    transition: all 0.3s;
  }

  .show {
    color: gold;
  }

  .show.active {
    opacity: 1;
    transition: all 0.5s;
    font-weight: bolder;
  }

  .show:not(.active) {
    opacity: 0.2;
    transition: all 0.5s;
    font-weight: lighter;
  }
</style>
