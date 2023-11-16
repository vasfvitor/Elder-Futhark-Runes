<script lang="ts">
  import { onMount } from "svelte";
  // import { Runics } from "./Runas";
  // import { Cards } from "./scripts/Cartas";

  import Tarot from "../lib/cards/Tarot.svelte";
  import { RUNAS } from "./scripts/CardData";
  // import { RUNAS } from "./scripts/Cartas";
  import { typewriter } from "./scripts/transition";

  import ButtonGroup from "flowbite-svelte/ButtonGroup.svelte";
  import GradientButton from "flowbite-svelte/GradientButton.svelte";
  import { AngleRightOutline, AngleLeftOutline } from "flowbite-svelte-icons";

  export let selSupertype: string,
    selRarity: string,
    selSubtype: string,
    selType: string;
  // const Runics = Cards;

  let over = false;
  let isLoading = true;
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

  onMount(() => {
    toRunic();
  });

  function toRunic() {
    isLoading = true;
    if (urlParams.has("runa")) {
      urlParams.set("runa", (idx - 1).toString());
    } else {
      urlParams.append("runa", (idx - 1).toString());
    }
    runic = true;

    setTimeout(() => {
      runic = false;
      isLoading = false;
    }, 350);
  }

  function showNext() {
    if (idx < RUNAS.length - 1) {
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

  function getImage(id: number, layer: string) {
    return `/test/${id}_card.png`;
    //return `/test/${id}_${layer}.png`;
  }
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
      disabled={idx === RUNAS.length - 1}
      >PRÓXIMA <AngleRightOutline class="w-3 h-3 ml-2" /></GradientButton
    >
  </ButtonGroup>
</div>

<div class="justify-center flex flex-col-reverse w-full">
  {#if idx >= 0 && idx < RUNAS.length}
    {#key idx}
      <div
        class:runic-moon={runic}
        class="mt-4 text-center text-white norse text-2xl"
      >
        <span class=" text-3xl runic"
          >{`${RUNAS[idx].fonetico.toLocaleLowerCase()}`}</span
        >
        <span class=" text-3xl runic-moon"
          >{`${RUNAS[idx].fonetico.toLocaleLowerCase()}`}</span
        >
        <p in:typewriter={{ speed: 5 }}>
          {`Nome: ${RUNAS[idx].nome}`}
        </p>
        <p in:typewriter={{ speed: 5 }}>
          {`Nome:${RUNAS[idx].id}`}
        </p>
        <!-- <p in:typewriter={{ speed: 5 }}>
          {`Nome:${RUNAS[idx].significado}`}
        </p>
        <p in:typewriter={{ speed: 5 }}>
          {`Nome:${RUNAS[idx].ideografia} - ${RUNAS[idx].ideograma}`}
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
  <div class="h-96">
    {#if idx >= 0 && idx < RUNAS.length && !isLoading}
      {#if RUNAS[idx].aett == 1}
        <div class="w-48 mx-auto">
          <Tarot
            id=""
            name=""
            img={getImage(RUNAS[idx].numero, "card")}
            foil={getImage(RUNAS[idx].numero, "foil")}
            mask={getImage(RUNAS[idx].numero, "mask")}
            number="tg"
            types={selType}
            supertype={selSupertype}
            subtypes={selSubtype}
            rarity={selRarity}
          />
        </div>
      {:else if RUNAS[idx].aett == 2}
        <Tarot
          id=""
          name=""
          img={getImage(RUNAS[idx].numero, "card")}
          foil={getImage(RUNAS[idx].numero, "foil")}
          mask={getImage(RUNAS[idx].numero, "mask")}
          number="tg"
          types={selType}
          supertype={selSupertype}
          subtypes={selSubtype}
          rarity={selRarity}
        />
      {:else}
        <Tarot
          id=""
          name=""
          img={getImage(RUNAS[idx].numero, "card")}
          foil={getImage(RUNAS[idx].numero, "foil")}
          mask={getImage(RUNAS[idx].numero, "mask")}
          number="tg"
          types={selType}
          supertype={selSupertype}
          subtypes={selSubtype}
          rarity={selRarity}
        />
      {/if}
    {:else}
      <div class="w-48 mx-auto">
        <Tarot />
      </div>
    {/if}
  </div>
</div>
