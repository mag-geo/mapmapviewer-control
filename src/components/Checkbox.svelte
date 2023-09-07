<script lang="ts">
  export let checked: boolean | null = null;
  $: indeterminate = checked === null
</script>

<input type="checkbox" bind:checked={checked} bind:indeterminate={indeterminate}>
