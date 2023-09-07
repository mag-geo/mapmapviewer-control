<script lang="ts">
  import type { TagList } from "../main";
  import Tag from "./Tag.svelte";

  export let tags: string[] | undefined;
  export let tagList: TagList;
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

<style lang="scss">
  .mmvc-tags {
    display: flex;
    gap: 0.5em;
  }
</style>
