<script lang="ts">
  import Atropos from "atropos";
  import "atropos/css";
  import { onMount } from "svelte";
  import { typewriter } from "./transition";
  let over = false;
  onMount(() => {
    Atropos({
      el: ".runic-card-atropos",
      activeOffset: 80,
      shadowScale: 1.1,
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
  import { Runics } from "./Runas";
  import { blur } from "svelte/transition";

  let runic = false;
  function toRunic() {
    runic = true;

    setTimeout(() => {
      runic = false;
    }, 500);
  }

  let idx = 0;
  function showNext() {
    if (idx < Runics.length - 1) {
      toRunic();
      idx++;
    }
  }
  function showPrev() {
    if (idx > 0) {
      toRunic();
      idx--;
    }
  }
</script>

<div class="mx-auto justify-center w-full my-8 flex flex-row gap-8">
  <button on:click={showPrev} class:text-gray-800={idx == 0}>Prev</button>
  <button on:click={showNext} class:text-gray-800={idx == Runics.length - 1}
    >Next</button
  >
</div>

<div class="justify-center flex flex-col-reverse w-full">
  {#if idx >= 0 && idx < Runics.length}
    {#key idx}
      <div
        class:runic-moon={runic}
        class="mt-4 text-center text-white norse text-2xl"
      >
        <span class=" text-3xl runic"
          >{`${Runics[idx].fonetico.toLocaleLowerCase()}`}</span
        >
        <span class=" text-3xl runic-moon"
          >{`${Runics[idx].fonetico.toLocaleLowerCase()}`}</span
        >
        <p in:typewriter={{ speed: 5 }}>
          {`Nome: ${Runics[idx].nome}`}
        </p>
        <p in:typewriter={{ speed: 5 }}>
          {`Nome:${Runics[idx].id}`}
        </p>
        <p in:typewriter={{ speed: 5 }}>
          {`Nome:${Runics[idx].significado}`}
        </p>
        <p in:typewriter={{ speed: 5 }}>
          {`Nome:${Runics[idx].ideografia} - ${Runics[idx].ideograma}`}
        </p>
      </div>
    {/key}
  {:else}
    <p>No item found for index {idx}</p>
  {/if}

  <!-- main Atropos container (required), add your custom class here -->
  <div class="h-[26.25rem]">
    {#key idx}
      <div
        in:blur={{ delay: 500, duration: 250 }}
        out:blur={{ delay: 0, duration: 250 }}
        class="atropos h-[26.25rem] w-[18.75rem] max-h-screen max-w-prose ${Runics[
          idx
        ]
          .nome} bg-black rounded-[2rem] p-4 runic-card-atropos mx-auto cursor-default select-none"
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
                  {Runics[idx].ideograma}
                </p>
                <p
                  class:active={over}
                  class="norse show absolute top-16 left-2 in text-lg"
                  data-atropos-offset="5"
                >
                  {Runics[idx].fonetico}
                </p>
                <p
                  class:active={over}
                  class="norse show absolute top-16 right-2 text-lg"
                  data-atropos-offset="5"
                >
                  {Runics[idx].polaridade}
                </p>
                <p
                  class:active={over}
                  class="norse show absolute top-2 inset-x-0 text-lg"
                  data-atropos-offset="5"
                >
                  {Runics[idx].numero}
                </p>
              </div>

              <!-- put your custom content here -->
            </div>
          </div>
        </div>
      </div>
    {/key}
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
