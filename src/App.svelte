<script lang="ts">
  import Runas from "./lib/Runas.svelte";
  import Toast from "flowbite-svelte/Toast.svelte";
  import Button from "flowbite-svelte/Button.svelte";
  import { Badge } from "flowbite-svelte";
  import { InfoCircleOutline, StarSolid } from "flowbite-svelte-icons";

  //
  import { onMount } from "svelte";

  import CardList from "./lib/cards/Cards.svelte";
  import Card from "./lib/cards/cards/CardProxy.svelte";

  let showcase,
    basics,
    reverse,
    holos,
    cosmos,
    amazings,
    radiant,
    basicGallery,
    vee,
    veeUltra,
    veeAlt,
    veeMax,
    veeMaxAlt,
    veeStar,
    trainerHolo,
    rainbow,
    gold,
    veeGallery,
    shinyVault;

  let isLoading = true;

  const getCards = async () => {
    let promiseArray = [];
    let cardFetch = await fetch("/data/cards.json");
    let cards = await cardFetch.json();
    return cards;
  };

  const loadCards = async () => {
    return getCards().then((cards) => {
      window.cards = cards;
      showcase = cards[0];
      basics = cards.slice(1, 4);
      reverse = [...cards.slice(4, 7), ...cards.slice(70, 76)];
      holos = cards.slice(7, 13);
      cosmos = cards.slice(13, 16);
      amazings = cards.slice(76, 85);
      radiant = cards.slice(16, 19);
      basicGallery = cards.slice(19, 22);
      vee = cards.slice(22, 25);
      veeUltra = cards.slice(25, 28);
      veeAlt = cards.slice(28, 34);
      veeMax = cards.slice(37, 40);
      veeMaxAlt = cards.slice(40, 43);
      veeStar = cards.slice(43, 46);
      trainerHolo = cards.slice(46, 52);
      rainbow = cards.slice(52, 58);
      gold = cards.slice(58, 64);
      veeGallery = cards.slice(64, 70);
      shinyVault = cards.slice(85, 91);
      isLoading = false;
    });
  };

  onMount(() => {
    loadCards();
    const $headings = document.querySelectorAll("h1,h2,h3");
    const $anchor = [...$headings].filter((el) => {
      const id = el.getAttribute("id")?.replace(/^.*?-/g, "");
      const hash = window.location.hash?.replace(/^.*?-/g, "");
      return id === hash;
    })[0];
    if ($anchor) {
      setTimeout(() => {
        $anchor.scrollIntoView();
      }, 100);
    }
  });
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

  <section class="container mx-auto min-h-[80vh] bg-white py-20 rounded">
    <Runas />
  </section>
</main>
<section class="bg-white">
  {#if true}
    <div class="w-96 mx-auto py-20">
      <Card
   
        
        img="./test/card.png"
       
      />
    </div>
    <h2 id="⚓-common">
      <a href="#⚓-common"> Common &amp; Uncommon </a>
    </h2>
    <p>
      All cards get a 3d rotation with CSS based on the cursor position.<br />
      The default basic non-holo cards simply apply a
      <mark>flare/glare effect</mark> to the card which follows the mouse.
    </p>
<!-- 
    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each basics as card, index}
          <Card
            id={card.id}
            name={card.name}
            img={card.images.large}
            number={card.number}
            types="Colorless"
            supertype={card.supertype}
            subtypes={card.subtypes}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-reverse">
      <a href="#⚓-reverse"> Reverse Holo non-rares </a>
    </h2>
    <p>
      Reverse holo cards come in <mark>many shapes and sizes</mark> (trainer,
      stage1, and different energy types). <br /> Therefore there are a few
      examples here to show the different variations. The
      <mark>background uses a foil and a mask layer</mark>
      along with a glare. I also <mark>clip the glare</mark> into the image window
      to treat the image and the holofoil differently.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each reverse as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
            isReverse
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-holo">
      <a href="#⚓-holo"> Holofoil Rare </a>
    </h2>
    <p>
      Holo cards have an additional <mark>vertical beam holo effect</mark>.
      <br />
      This uses a combintation of <mark>repeating gradients and filters</mark>,
      with <mark>clip-path</mark> to mask the holo areas for each stage. To get the
      holo effect to change while rotating the card I set the background-position
      of each gradient layer based on cursor.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each holos as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-galaxy">
      <a href="#⚓-galaxy"> Galaxy/Cosmos Holofoil </a>
    </h2>
    <p>
      Similar to the Holofoil, but this uses a special image <mark
        >background of a galaxy effect</mark
      >
      with a <mark>gradient rainbow set to color-dodge &amp; color-burn</mark> on
      top.
    </p>
    <h3>An instant classic for any PTCG fan!</h3>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each cosmos as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-amazing">
      <a href="#⚓-amazing"> Holofoil Amazing Rare </a>
    </h2>
    <p>
      Amazing Rare cards have a <mark>very unique shiny foil</mark> that extends
      past the frame and is much shinier than a regular holo effect, and textured.
      We achieve this by using a mask and applying a glitter effect with a lighten
      filter.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each amazings as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-radiant">
      <a href="#⚓-radiant"> Radiant Holofoil </a>
    </h2>
    <p>
      The newest holofoil added to the series! <br /> The radiant effect proved
      <mark>very difficult to emulate</mark>
      without crazy math, so I settled with a
      <mark>criss-cross linear gradient pattern</mark> that moves across the card.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each radiant as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-trainer-gallery-holo">
      <a href="#⚓-trainer-gallery-holo"> Trainer Gallery Holofoil </a>
    </h2>
    <p>
      The effect for Trainer Gallery holofoils gives it a <mark
        >kind of metallic effect with iridescent shine</mark
      >. This is achieved with a <mark>large color dodge linear gradient</mark>,
      and a
      <mark>hard-light radial gradient</mark> on top, at the cursor position, to
      give the shimmer.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each basicGallery as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-v">
      <a href="#⚓-v"> Pokemon V </a>
    </h2>
    <p>
      V cards have a <mark>diagonal holographic effect</mark> which that appears
      to travel in opposite directions when you tilt the card into the light.
    </p>
    <p>
      This effect is achieved with <mark>multiple background gradients</mark> and
      I change the background positions based on the cursor x/y. The gradients are
      set to color-dodge, and there's a subtle svg noise effect.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each vee as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-v-full-art">
      <a href="#⚓-v-full-art">
        Pokemon V <sup>(Full Art)</sup>
      </a>
    </h2>
    <p>
      Similar to the Pokemon V effect, Full-Art cards <mark
        >use diagonal gradients</mark
      >, but they have <mark>additional texture</mark> when looked at from
      certain angles. This is achieved with an
      <mark>additional background image with an exclusion filter</mark>. The
      effect is also more vibrant which adds to the metallic look.
    </p>
    <p>
      The texture effect is not identical to reality as the real cards each have
      a unique pattern that follows the art.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each veeUltra as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-v-alternate-art">
      <a href="#⚓-v-alternate-art">
        Pokemon V <sup>(Alternate Art)</sup>
      </a>
    </h2>
    <p>
      Alternate Art Pokemon V cards have <mark
        >practically the same holo effect as the Ultra Rare (Full Art) cards</mark
      >. The only difference is the pattern texture.
    </p>
    <p>
      The effect looks somewhat different though due to the type of artwork.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each veeAlt as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-v-max">
      <a href="#⚓-v-max"> VMax </a>
    </h2>
    <p>
      The gradient effect of Pokemon VMax is more subtle, using a <mark
        >larger background gradient</mark
      >
      which moves more slowly. But the
      <mark>texture effect is more pronounced</mark>.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each veeMax as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-v-max-alternate">
      <a href="#⚓-v-max-alternate">
        VMax <sup>(Alternate/Rainbow)</sup>
      </a>
    </h2>
    <p>
      There's some VMax cards that show a <mark>full, or alternate artwork</mark
      >. These are
      <mark>classed as "rainbow rare"</mark>
      and have a similar effect to the rainbow cards. It's a really
      <mark>vibrant and glittery overlay</mark>.
    </p>
    <p>
      This is achieved with a <mark>background image of glitter/sparkles</mark>,
      and a texture pattern background image, sandwiching the usual linear
      gradients.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each veeMaxAlt as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-v-star">
      <a href="#⚓-v-star"> VStar </a>
    </h2>
    <p>
      Again back to the <mark>diagonal gradients overlaying a texture</mark>,
      VStar are quite
      <mark>similar to the Ultra Rare</mark>
      (Full/Alt) cards. The cards are generally
      <mark>brighter with a pastel hue</mark>, though, which makes the gradient
      and texture more subtle.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each veeStar as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-trainer-full-art">
      <a href="#⚓-trainer-full-art">
        Trainer Holo <sup>(Full Art / Trainer Gallery)</sup>
      </a>
    </h2>
    <p>
      Again back to the <mark>diagonal gradients overlaying a texture</mark>,
      VStar are quite
      <mark>similar to the Ultra Rare</mark>
      (Full/Alt) cards. The cards are generally
      <mark>brighter with a pastel hue</mark>, though, which makes the gradient
      and texture more subtle.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each trainerHolo as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-rainbow-rare">
      <a href="#⚓-rainbow-rare">
        Rainbow Rare <sup>(VMax, VStar)</sup>
      </a>
    </h2>
    <p>
      The Rainbow Rare is a <mark
        >super glittery effect on top of pastel gradients</mark
      >. This is achieved with a background image of glitter/sparkles and a
      <mark>color-burn/hard-light background blend</mark> for some pastel gradients.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each rainbow as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-secret-rare">
      <a href="#⚓-secret-rare">
        Secret Rare <sup>(Gold)</sup>
      </a>
    </h2>
    <p>
      <mark>GOLD!</mark> Here we apply two glitter layers on top of each other
      with a overlay effect and
      <mark>slide the two layers in opposite directions</mark>. We also
      <mark>mask the foil image</mark> with a gadient so that foil and glitter layers
      are mutually exclusive. The resulting effect is a shimmering glitter layer!
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each gold as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-trainer-gallery-v">
      <a href="#⚓-trainer-gallery-v">
        Trainer Gallery <sup>(V / VMax)</sup>
      </a>
    </h2>
    <p>
      The V and VMax cards in the Trainer Gallery are generally quite similar to
      the normal V and VMax cards, so here I've just tweaked the values a little
      and added a different background texture.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each veeGallery as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList>

    <h2 id="⚓-shiny-vault">
      <a href="#⚓-shiny-vault">
        Shiny Vault <sup>(Basic / Stage 1 / V / VMax)</sup>
      </a>
    </h2>
    <p>
      Shiny Vault cards have quite a unique effect in whereby the foil
      background is a shiny silver color. To achieve this we apply the foil
      image with some radial gradients to darken the foil over the background.
      This creates a slightly silver effect on top of the white card background.
      This effect works best in Firefox.
    </p>

    <CardList>
      {#if isLoading}
        loading...
      {:else}
        {#each shinyVault as card, index}
          <Card
            id={card.id}
            name={card.name}
            number={card.number}
            set={card.set}
            types={card.types}
            supertype={card.supertype}
            subtypes={card.subtypes}
            rarity={card.rarity}
          />
        {/each}
      {/if}
    </CardList> -->
  {/if}
</section>
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
