<script lang="ts">
  import Runas from "./lib/Runas.svelte";

  import { Toast, Button } from "flowbite-svelte";
  import { Badge } from "flowbite-svelte";
  import { InfoCircleOutline, StarSolid } from "flowbite-svelte-icons";
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
