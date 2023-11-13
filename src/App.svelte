<script lang="ts">
  import Runas from "./lib/Runas.svelte";
  import Toast from "flowbite-svelte/Toast.svelte";
  import Button from "flowbite-svelte/Button.svelte";
  import { Badge } from "flowbite-svelte";
  import { InfoCircleOutline, StarSolid } from "flowbite-svelte-icons";

  import CardList from "./lib/cards/Cards.svelte";
  import Card from "./lib/cards/cards/CardProxy.svelte";
  import Tarot from "./lib/cards/cards/Tarot.svelte";

  import { Label, Select } from "flowbite-svelte";
  let selSupertype: string, selRarity: string, selSubtypes:string;

  let supertypes = [
    { value: "trainer", name: "trainer" },
    { value: "pokémon", name: "pokémon" },
  ];

  let subtypes = [
    { value: "stage", name: "stage" },
    { value: "supporter", name: "supporter" },
    { value: "item", name: "item" },
    { value: "v-union", name: "v-union" },

  ];

  let rarities = [
    { value: "amazing rare", name: "amazing rare" },
    { value: "rare holo", name: "rare holo" },
    { value: "rare holo cosmos", name: "rare holo cosmos" },
    { value: "reverse holo", name: "reverse holo" },
    { value: "rare holo cosmos", name: "rare holo cosmos" },
    { value: "radiant rare", name: "radiant rare" },
    { value: "rare rainbow alt", name: "rare rainbow alt" },
    { value: "rare holo vmax", name: "rare holo vmax" },
    { value: "rare rainbow", name: "rare rainbow" },
    { value: "rare secret", name: "rare secret" },
    { value: "rare shiny", name: "rare shiny" },
    { value: "rare shiny v", name: "rare shiny v" },
    { value: "rare shiny vmax", name: "rare shiny vmax" },
    { value: "rare ultra", name: "rare ultra" },
    { value: "trainer gallery rare holo", name: "trainer gallery rare holo" },
    { value: "rare holo v", name: "rare holo v" },
    { value: "rare holo vstar", name: "rare holo vstar" },
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

  <section class="bg-gray-800 py-20">
    <Label>
      supertypes
      <Select class="mt-2" items={supertypes} bind:value={selSupertype} />
    </Label>
    <Label>
      rarities
      <Select class="mt-2" items={rarities} bind:value={selRarity} />
    </Label>
    <Label>
      rarities
      <Select class="mt-2" items={subtypes} bind:value={selSubtypes} />
    </Label>
    <CardList>
      <!-- // in base.css -->
      <Tarot
        id=""
        name=""
        img="./test/99-test.jpg"
        number="tg"
        types="water" 
        supertype={selSupertype}
        subtypes={selSubtypes}
        rarity={selRarity}
        foil="/test/99-foil.png"
        mask="/test/99-mask.png"
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
      <!-- <Card
      id=""
      name=""
      img="./test/card.png"
      number="tg"
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare secret"
      foil="/test/foil.webp"
      mask="/test/mask.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="amazing rare"
      img="./test/2card.png"
      foil="/test/2foil2.webp"
      mask="/test/2mask2.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare holo cosmos"
      img="./test/2card.png"
      foil="/test/2foil2.webp"
      mask="/test/2mask2.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare secret"
      img="./test/3card.png"
      foil="/test/3foil3.webp"
      mask="/test/3mask3.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare secret"
      img="./test/4card.png"
      foil="/test/4foil4.webp"
      mask="/test/4mask4.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare secret"
      img="./test/5card.png"
      foil="/test/5foil5.webp"
      mask="/test/5mask5.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare holo"
      img="./test/6card.png"
      foil="/test/6foil6.webp"
      mask="/test/6mask6.webp"
    />
    <Card
      id=""
      name=""
      number=""
      types="psychic"
      supertype="pokémon"
      subtypes="vmax fusion strike"
      rarity="rare secret"
      img="./test/7card.png"
      foil="/test/7foil7.webp"
      mask="/test/7mask7.webp"
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
