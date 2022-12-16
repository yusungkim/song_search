<script>
  import {goto} from '$app/navigation';

  import { Icon, ArrowLeft } from "svelte-hero-icons";
  
  import home from '$lib/assets/homeIcon.svg';

  const goBack = () => {
    window.history.back()
  }
</script>
<nav class="flex justify-between text-slate-50">
  <button on:click={goBack} class="flex gap-1 items-center">
    <Icon src="{ArrowLeft}" class="h-6 text-slate-50 w-6" />
    <div>Back</div>
  </button>
  <button on:click={() => goto('/')}>
    <img src="{home}" alt="logo" class="h-6 w-6">
  </button>
</nav>
<slot />