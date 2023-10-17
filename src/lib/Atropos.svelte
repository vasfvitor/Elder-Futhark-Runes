<script lang="ts">
  // import Atropos library
  import Atropos from "atropos";
  import "atropos/css";
  import { onMount } from "svelte";
  let over = false;
  onMount(() => {
    Atropos({
      el: ".my-atropos",
      activeOffset: 80,
      shadowScale: 0.91,
      onEnter() {
        over = true;
      },
      onLeave() {
        over = false;
      },
      onRotate(x, y) {
        //console.log("Rotate", x, y);
      },
    });
  });
  import type { Runa } from "./Runas";
  export let runa: Runa;
  import { fade } from "svelte/transition";
</script>

<div class="justify-center flex flex-col-reverse py-20 w-full" transition:fade>
  <div class="pt-12 self-center text-left text-white norse text-2xl">
    <p>
      {runa.nome}
    </p>
    <p>
      n {runa.id}
    </p>
    <p>{runa.significado}</p>
    <p> {runa.ideografia} - {runa.ideograma}</p> <span class="runic">{runa.fonetico.toLocaleLowerCase()}</span>
   
  </div>

  <!-- main Atropos container (required), add your custom class here -->
  <div
    class="atropos h-[26.25rem] w-[18.75rem] max-h-screen max-w-prose ${runa.nome} bg-black rounded-[2rem] p-4 my-atropos mx-auto cursor-default select-none"
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
          <div data-atropos-offset="-3" class="magic w-full h-full">
            <p
              class:active={over}
              class="runic glow absolute inset-x-0 inset-y-0 drop-shadow-[0_0px_12px_rgba(255,255,255,0.5)]"
              data-atropos-offset="8"
            >
              {runa.ideograma}
            </p>
            <p
              class:active={over}
              class="norse show absolute top-16 left-2 in text-lg"
              data-atropos-offset="5"
            >
              {runa.fonetico}
            </p>
            <p
              class:active={over}
              class="norse show absolute top-16 right-2 text-lg"
              data-atropos-offset="5"
            >
              {runa.polaridade}
            </p>
            <p
              class:active={over}
              class="norse show absolute top-2 inset-x-0 text-lg"
              data-atropos-offset="5"
            >
              {runa.numero}
            </p>
          </div>
          <!-- put your custom content here -->
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --shadow-color: #ffd700;
    --shadow-color-light: black;
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
