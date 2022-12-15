<script>
  import {goto} from '$app/navigation';

  const goBack = () => {
    window.history.back()
  }
</script>
<nav class="flex justify-between text-slate-50">
  <button on:click={goBack} class="flex gap-1 items-center">
    <img src="./backicon.svg" alt="" class="w-4 h-4 bg-green-400" />
    <div>Back</div>
  </button>
  <button on:click={() => goto('/')}><img src="./homeIcon.svg" alt="" /></button>
</nav>
<slot />