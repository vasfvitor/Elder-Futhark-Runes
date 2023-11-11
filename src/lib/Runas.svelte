<script lang="ts">
  import Atropos from "atropos";
  import "atropos/css";
  // import { Runics } from "./Runas";
  // import { Cards } from "./scripts/Cartas";
  import { RUNAS } from "./scripts/Cartas";
  import { typewriter } from "./scripts/transition";
  import { onMount } from "svelte";

  import PrimeiroAett from "./aett/PrimeiroAett.svelte";
  import SegundoAett from "./aett/SegundoAett.svelte";
  import TerceiroAett from "./aett/TerceiroAett.svelte";

  // const Runics = Cards;

  const Runics = RUNAS;

  let atropo: any;
  let over = false;
  onMount(() => {
    atropo = createAtropos();
  });

  function createAtropos() {
    return Atropos({
      el: ".runic-card-atropos",
      activeOffset: 25,
      shadowScale: 0.85,

      rotateXMax: 7,
      rotateYMax: 7,

      highlight: false,
      onEnter() {
        over = true;
      },
      onLeave() {
        over = false;
      },
      onRotate(x, y) {},
    });
  }
  let idx = 0;
  let runic = false;
  let urlParams = new URLSearchParams(window.location.search);
  let url = new URL(window.location.href);

  if (urlParams.has("runa")) {
    idx = urlParams.entries().next().value[1] - 1;
    // urlParams.forEach((entry) => {
    //   console.log(entry);
    // });
  }

  function toRunic() {
    if (urlParams.has("runa")) {
      urlParams.set("runa", (idx - 1).toString());
    } else {
      urlParams.append("runa", (idx - 1).toString());
    }

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
  import ButtonGroup from "flowbite-svelte/ButtonGroup.svelte";
  import GradientButton from "flowbite-svelte/GradientButton.svelte";

  import { AngleRightOutline, AngleLeftOutline } from "flowbite-svelte-icons";
</script>

<div class="mx-auto justify-center my-8 flex">
  <ButtonGroup>
    <GradientButton
      size="lg"
      shadow
      color="purpleToPink"
      on:click={showPrev}
      disabled={idx === 0}
      ><AngleLeftOutline class="w-3 h-3 mr-2" />ANTERIOR</GradientButton
    >

    <GradientButton
      size="lg"
      shadow
      color="purpleToPink"
      on:click={showNext}
      disabled={idx === Runics.length - 1}
      >PRÓXIMA <AngleRightOutline class="w-3 h-3 ml-2" /></GradientButton
    >
  </ButtonGroup>
</div>

<div class="  justify-center flex flex-col-reverse w-full">
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
        <!-- <p in:typewriter={{ speed: 5 }}>
          {`Nome:${Runics[idx].significado}`}
        </p>
        <p in:typewriter={{ speed: 5 }}>
          {`Nome:${Runics[idx].ideografia} - ${Runics[idx].ideograma}`}
        </p> -->
      </div>
    {/key}
  {:else}
    <p>Runa {idx + 1} não encontrada...</p>
    <script>
      setTimeout(() => {
        window.location = "/";
      }, 1000);
    </script>
  {/if}
  {#if idx >= 0 && idx < Runics.length}
    <div class="h-[26.25rem] w-full">
      {#if Runics[idx].aett == 1}
        <PrimeiroAett {idx} {over} runa={Runics[idx]} />
      {:else if Runics[idx].aett == 2}
        <SegundoAett {idx} {over} runa={Runics[idx]} />
      {:else}
        <TerceiroAett {idx} {over} runa={Runics[idx]} />
      {/if}
    </div>
  {/if}
</div>
