<script lang="ts">
  import { onMount } from "svelte";
  onMount(() => {
    function open_card() {
      document.getElementById("outside").className = "open-card";
    }

    function close_card() {
      document.getElementById("outside").className = "";
    }

    const basketball = document.querySelector("#basketball");
    const vegan = document.querySelector("#vegan");
    const poetry = document.querySelector("#poetry");
    const lawyer = document.querySelector("#lawyer");

    document.querySelector("#bag").addEventListener("click", openBag);
    function openBag() {
      basketball.classList.toggle("hidden");
    }

    document.querySelector("inside-pic").addEventListener("click", openPresent);

    function openPresent() {}
  });
</script>

<img id="bag" src="/h" alt="AAAAAAAAAAAA" />
<img id="outside" src="/h" alt="AAAAAAAAAAAA" />
<img id="basketball" src="/h" alt="AAAAAAAAAAAA" />
<img id="vegan" src="/h" alt="AAAAAAAAAAAA" />
<img id="poetry" src="/h" alt="AAAAAAAAAAAA" />
<img id="lawyer" src="/h" alt="AAAAAAAAAAAA" />
<img id="inside-pic" src="/h" alt="AAAAAAAAAAAA" />
