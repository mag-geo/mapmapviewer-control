<script>import Tag from "./Tag.svelte";
export let tagList;
export let enabledTags = [];
let checked = Object.fromEntries(
  Object.keys(tagList).map((key) => [key, false])
);
$:
  enabledTags = Object.entries(checked).filter(([_, v]) => v).map(([k, _]) => k);
</script>

<div class="mmvc-taglist">
  {#each Object.entries(tagList) as [key, tag]}
    <label>
      <input type="checkbox" bind:checked={checked[key]} />
      <Tag display={tag.display} />
    </label>
  {/each}
</div>

<style>.mmvc-taglist {
  display: flex;
  gap: 0.5em;
}</style>
