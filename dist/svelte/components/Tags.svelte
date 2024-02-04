<script>import Tag from "./Tag.svelte";
export let tags;
export let tagList;
</script>

{#if tags}
  <div class="mmvc-tags">
    {#each tags as tag}
      {#if tag in tagList}
        <Tag display={tagList[tag].display} href={tagList[tag].url} />
      {/if}
    {/each}
  </div>
{/if}

<style>.mmvc-tags {
  display: flex;
  gap: 0.5em;
}</style>
