<script lang="ts">
  import Atropos from "atropos";
  import "atropos/css";
  import { Runics } from "./Runas";
  import { Cards } from "./Cartas";
  import { typewriter } from "./transition";
  import { onMount } from "svelte";

  let atropo: any;
  let over = false;
  onMount(() => {
    atropo = createAtropos();
  });

  function createAtropos() {
    return Atropos({
      el: ".runic-card-atropos",
      activeOffset: 80,
      shadowScale: 1.1,

      rotateXMax: 20,
      rotateYMax: 20,

      highlight: false,
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
  }
  let idx = 0;
  let runic = false;

  function toRunic() {
    atropo.destroy();
    runic = true;

    setTimeout(() => {
      atropo = createAtropos();
      runic = false;
    }, 350);
  }

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

  import PrimeiroAett from "./PrimeiroAett.svelte";
  import SegundoAett from "./SegundoAett.svelte";
  import TerceiroAett from "./TerceiroAett.svelte";
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

  <div class="h-[26.25rem] w-full">
    {#if Runics[idx].aett == 1}
      <PrimeiroAett {idx} {over} runa={Cards[idx]} />
    {:else if Runics[idx].aett == 2}
      <SegundoAett {idx} {over} runa={Cards[idx]} />
    {:else}
      <TerceiroAett {idx} {over} runa={Cards[idx]} />
    {/if}
  </div>
</div>
