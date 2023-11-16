<script lang="ts">
  import Runas from "./lib/Runas.svelte";
  import NewRunas from "./lib/NewRunas.svelte";
  import Toast from "flowbite-svelte/Toast.svelte";
  import Button from "flowbite-svelte/Button.svelte";
  import { Badge } from "flowbite-svelte";
  import { InfoCircleOutline, StarSolid } from "flowbite-svelte-icons";

  import CardList from "./lib/cards/Cards.svelte";
  import Tarot from "./lib/cards/Tarot.svelte";

  import { Label, Select } from "flowbite-svelte";
  let selSupertype: string,
    selRarity: string,
    selSubtype: string,
    selType: string;

  let supertypes = [
    { value: "none", name: "none" },
    { value: "trainer", name: "trainer" },
    { value: "pokémon", name: "pokémon" },
  ];

  let subtypes = [
    { value: "none", name: "none" },
    { value: "stage", name: "stage" },
    { value: "v-union", name: "v-union" },
    { value: "supporter", name: "supporter" },
    { value: "item", name: "item" },
  ];

  let rarities = [
    { value: "none", name: "none" },
    { value: "amazing rare", name: "amazing rare" },
    { value: "radiant rare", name: "radiant rare" },
    { value: "rare holo cosmos", name: "rare holo cosmos" },
    { value: "rare holo vstar", name: "rare holo vstar" },
    { value: "rare holo vmax", name: "rare holo vmax" },
    { value: "rare holo v", name: "rare holo v" },
    { value: "rare holo", name: "rare holo" },
    { value: "reverse holo", name: "reverse holo" },
    { value: "rare rainbow alt", name: "rare rainbow alt" },
    { value: "rare rainbow", name: "rare rainbow" },
    { value: "rare secret", name: "rare secret" },
    { value: "rare shiny vmax", name: "rare shiny vmax" },
    { value: "rare shiny v", name: "rare shiny v" },
    { value: "rare shiny", name: "rare shiny" },
    { value: "rare ultra", name: "rare ultra" },
    { value: "trainer gallery rare holo", name: "trainer gallery rare holo" },
  ];

  let types = [
    { value: "none", name: "none" },
    { value: "water", name: "water" },
    { value: "fire", name: "fire" },
    { value: "grass", name: "grass" },
    { value: "lightning", name: "lightning" },
    { value: "psychic", name: "psychic" },
    { value: "fighting", name: "fighting" },
    { value: "darkness", name: "darkness" },
    { value: "metal", name: "metal" },
    { value: "dragon", name: "dragon" },
    { value: "fairy", name: "fairy" },
  ];
</script>

<main
  class=" border-blood border-t-[8px] border-b-[4px] border-double h-full grow bg-primary-950"
>
  <header
    class="bg-primary-900 container -mb-1 relative justify-center text-blood text-center mx-auto w-full text-5xl py-4"
  >
    <div class="top-4 absolute right-4">
      <Toast>
        <InfoCircleOutline
          slot="icon"
          class="w-5  h-5 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200"
        />
        Pressione sobre a carta para anima-la
      </Toast>
    </div>
    <h1 class="norse text-white">RUNAS NORDICAS</h1>
  </header>

  <!-- <section class="container mx-auto min-h-[80vh] bg-white py-20 rounded">
    <Runas />
  </section> -->
  <section class="container mx-auto min-h-[80vh] bg-white py-20 rounded">
    <div class="w-fit mx-auto bg-white p-8 rounded">
      types
      <Label>
        types
        <Select class="mt-2" items={types} bind:value={selType} />
      </Label>
      <Label>
        subtypes
        <Select class="mt-2" items={subtypes} bind:value={selSubtype} />
      </Label>
      <Label>
        supertypes
        <Select class="mt-2" items={supertypes} bind:value={selSupertype} />
      </Label>
      <Label>
        rarities
        <Select class="mt-2" items={rarities} bind:value={selRarity} />
      </Label>
    </div>

    <NewRunas {selType} {selSubtype} {selSupertype} {selRarity} />
  </section>

  <section class="bg-gray-800 py-20">
    <div class="w-fit mx-auto bg-white p-8 rounded">
      types
      <Label>
        types
        <Select class="mt-2" items={types} bind:value={selType} />
      </Label>
      <Label>
        subtypes
        <Select class="mt-2" items={subtypes} bind:value={selSubtype} />
      </Label>
      <Label>
        supertypes
        <Select class="mt-2" items={supertypes} bind:value={selSupertype} />
      </Label>
      <Label>
        rarities
        <Select class="mt-2" items={rarities} bind:value={selRarity} />
      </Label>
    </div>

    <CardList>
      <!-- types in base.css -->
      <Tarot
        id=""
        name=""
        img="./test/fehu_card.png"
        number="tg"
        types={selType}
        supertype={selSupertype}
        subtypes={selSubtype}
        rarity={selRarity}
        foil="/test/fehu_foil.png"
        mask="/test/fehu_mask.png"
      />
      <Tarot
        id=""
        name=""
        img="./test/fehu_card.png"
        number="tg"
        types={selType}
        supertype={selSupertype}
        subtypes={selSubtype}
        rarity={selRarity}
      />

      <!-- <Tarot
        id=""
        name=""
        img="./test/99-test.jpg"
        number="tg"
        types="water"
        supertype="pokémon"
        subtypes="rare holo vmax"
        rarity="rare rainbow alt"
        foil="/test/99-foil.png"
        mask="/test/99-mask.png"
      /> -->
    </CardList>
  </section>
</main>
<footer
  class="text-center justify-center flex-col bg-primary-900 font-black py-12"
>
  <div class=" text-gray-300 mb-12">
    Contato: <Badge border color="dark" href="mailto:runas@virtuaires.com.br"
      >runas@virtuaires.com.br</Badge
    >
  </div>
  <Button href="https://github.com/vasfvitor/Elder-Futhark-Runes" color="dark"
    ><StarSolid class="w-5 h-5 mr-2" />Star on GitHub</Button
  >
</footer>

<style>
</style>
