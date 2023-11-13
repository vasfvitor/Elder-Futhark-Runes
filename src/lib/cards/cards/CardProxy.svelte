<script>
  import Card from "./Card.svelte";

  // data / pokemon props
  export let id = undefined;
  export let name = undefined;
  export let number = undefined;
  export let set = undefined;
  export let types = undefined;
  export let subtypes = undefined;
  export let supertype = undefined;
  export let rarity = undefined;

  // image props
  export let img = undefined;
  export let back = undefined;
  export let foil = undefined;
  export let mask = undefined;

  export let showcase = false;

  const proxy = {
    img,
    back,
    foil, // get from cdn
    mask, // get from cdn
    id: 0,
    name: "",
    number,
    set,
    types,
    subtypes,
    supertype,
    rarity,
    showcase,
  };

  // function foilMaskImage(prop, type = "masks") {
  //   import altArts from "./alternate-arts.json";
  //   import promos from "./promos.json";
  //   let etch = "holo";
  //   let style = "reverse";
  //   let ext = "webp";
  //   style = "swholo";
  //   style = "cosmos";
  //   etch = "etched";
  //   style = "radiantholo";
  //   etch = "holo";
  //   style = "sunpillar";
  //   etch = "etched";
  //   style = "sunpillar";
  //   etch = "etched";
  //   style = "swsecret";
  //   etch = "etched";
  //   style = "sunpillar";
  //   rarity = "Rare Shiny V";
  //   style = "swsecret";
  //   rarity = "Rare Shiny VMAX";
  //   etch = "holo";
  //   style = "rainbow";
  //   etch = "etched";
  //   style = "sunpillar";
  //   etch = "etched";
  //   style = "swsecret";
  //   etch = "etched";
  //   style = "swsecret";
  //   rarity = "Rare Rainbow Alt";
  //   style = "sunpillar";

  //   style = promoStyle.style.toLowerCase();
  //   etch = promoStyle.etch.toLowerCase();

  //   return `${server}/foils/${fSet}/${type}/upscaled/${fNumber}_foil_${etch}_${style}_2x.${ext}`;
  // }
</script>

<Card {...proxy} />
