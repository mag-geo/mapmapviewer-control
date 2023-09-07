<script lang="ts">
  export let details: string | undefined;
</script>

{#if details !== undefined}
  <details>
    <summary>details</summary>
    {details}
  </details>
{/if}
