<script>import Node from "./Node.svelte";
export let map;
export let options;
export let tagList = {};
</script>

{#each Object.keys(options) as key}
  <div class="mmvc">
    <Node {map} bind:option={options[key]} {tagList} />
  </div>
{/each}

<style></style>
