<script lang="ts">
  export let display: string;
  export let href: string | undefined = undefined;
</script>

{#if href}
  <a {href} target="_blank"><span>{display}</span></a>
{:else}
  <span>{display}</span>
{/if}

<style lang="scss">
  span::before {
    content: "#";
    padding-right: 0.1em;
  }
</style>
