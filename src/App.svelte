<script lang="ts">
  import Runas from "./lib/Atropos.svelte";
  import { runas } from "./lib/Runas";
  import type { Runa } from "./lib/Runas";

  let idx = 0;
  function showNext() {
    if (idx < runas.length - 1) {
      idx++;
    }
  }
  function showPrev() {
    if (idx > 0) {
      idx--;
    }
  }
  import { flip } from "svelte/animate";
</script>

<main class=" h-full grow">

  <header class="text-center mx-auto w-full py-8"><h1 class="runic">RUNAS NORDICAS</h1></header>
  <p>{idx}</p>
  <section class="container mx-auto min-h-[80vh]">
    {#if runas[idx]}
      <div in:flip out:flip>
        <Runas runa={runas[idx]} />
      </div>
    {/if}

    <div class="mx-auto justify-center w-full my-12 flex flex-row gap-8">
      <button on:click={showPrev} class:text-gray-800={idx == 0}>Prev</button>
      <button on:click={showNext} class:text-gray-800={idx == runas.length - 1}
        >Next</button
      >
    </div>
  </section>
</main>
<footer class="text-center bg-black font-black py-20">footer</footer>

<style>
</style>
