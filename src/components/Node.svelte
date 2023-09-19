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
      <Checkbox {map} layerId={option.layerId} />
    {/if}
  </label>

  <!-- 詳細 -->
  <Details details={option.details} />

  <!-- そのレイヤーのタグ -->
  <Tags tags={option.tags} {tagList} />

  <!-- 透過度 -->
  {#if option.type === "layer" && option.opacityRange}
    <Range {map} layerId={option.layerId} />
  {/if}

  <!-- 子レイヤー -->
  {#if option.type === "group"}
    <!-- タグ一覧 -->
    {#if option.childrenTagList}
      <TagList tagList={option.childrenTagList} bind:enabledTags />
    {/if}

    <!-- 子 -->
    <!-- filter by tags -->
    {#each Object.entries(option.children).filter( ([_, v]) => enabledTags.every((tag) => v.tags === undefined || v.tags.includes(tag)) ) as [_, childOption]}
      <svelte:self
        {map}
        option={childOption}
        tagList={option.childrenTagList}
      />
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
