<script lang="ts">
  import type { TagList } from "../main";
  import Tag from "./Tag.svelte";

  export let tagList: TagList;
  export let enabledTags: string[] = [];

  // 表示するタグを選択するcheckboxの状態
  let checked = Object.fromEntries(
    Object.keys(tagList).map((key) => [key, false])
  );

  // チェックされているタグを表示
  $: enabledTags = Object.entries(checked)
    .filter(([_, v]) => v)
    .map(([k, _]) => k);
</script>

<div class="mmvc-taglist">
  {#each Object.entries(tagList) as [key, tag]}
    <label>
      <input type="checkbox" bind:checked={checked[key]} />
      <Tag display={tag.display} />
    </label>
  {/each}
</div>

<style lang="scss">
  .mmvc-taglist {
    display: flex;
    gap: 0.5em;
  }
</style>
