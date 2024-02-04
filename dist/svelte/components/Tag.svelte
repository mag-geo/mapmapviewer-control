<script>export let display;
export let href = void 0;
</script>

{#if href}
  <a {href} target="_blank"><span>{display}</span></a>
{:else}
  <span>{display}</span>
{/if}

<style>span::before {
  content: "#";
  padding-right: 0.1em;
}</style>
