<script lang="ts">
  import type { TagList } from "../main";
  import Tag from "./Tag.svelte";

  export let tagList: TagList;
</script>

<div class="mmvc-taglist">
  {#each Object.entries(tagList) as [_, tag]}
    <Tag display={tag.display} />
  {/each}
</div>

<style lang="scss">
  .mmvc-taglist {
    display: flex;
    gap: 0.5em;
  }
</style>
