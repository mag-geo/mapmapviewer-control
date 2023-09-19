<script lang="ts">
  import type { Map } from "maplibre-gl";
  import type { ControlOption, TagList as TagListSpecification } from "../main";
  import Details from "./Details.svelte";
  import Tags from "./Tags.svelte";
  import Range from "./Range.svelte";
  import TagList from "./TagList.svelte";
  import Checkbox from "./Checkbox.svelte";

  export let map: Map;
  export let option: ControlOption;
  export let tagList: TagListSpecification;

  let enabledTags: string[] = [];
</script>

<div class="mmvc-node">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <!-- タイトル -->
    <h3>{option.display}</h3>

    <!-- 表示切り替えcheckbox -->
    <!-- 子を持たないときのみcheckboxを表示 -->
    <!-- TODO: 親レイヤーの表示切り替え -->
    {#if option.type === "layer"}
      <Checkbox {map} layerId={option.layerId} bind:visibility={option.visibility} />
    {/if}
  </label>

  <!-- 詳細 -->
  <Details details={option.details} />

  <!-- そのレイヤーのタグ -->
  <Tags tags={option.tags} {tagList} />

  <!-- 透過度 -->
  {#if option.type === "layer" && option.opacityRange}
    <Range {map} layerId={option.layerId} bind:opacity={option.opacity} />
  {/if}

  <!-- 子レイヤー -->
  {#if option.type === "group"}
    <!-- タグ一覧 -->
    {#if option.childrenTagList}
      <TagList tagList={option.childrenTagList} bind:enabledTags />
    {/if}

    <!-- 子 -->
    {#each Object.keys(option.children) as key}
      <!-- filter by enabledTags -->
      {#if enabledTags.every((tag) => option.type === "group" && (option.children[key].tags === undefined || option.children[key].tags?.includes(tag)))}
        <svelte:self {map} bind:option={option.children[key]} tagList={option.childrenTagList} />
      {/if}
    {/each}
  {/if}
</div>

<style lang="scss">
  .mmvc-node {
    margin: 1em 0 1em 0em;
    padding-left: 1.5em;
    border-left: 3px solid #ccc;

    label {
      display: flex;
      justify-content: space-between;
      gap: 1em;
    }
  }
</style>
