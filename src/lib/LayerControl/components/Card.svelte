<script lang="ts">
  import { setLayerOpacity, toggleLayerVisibility } from "../common";
  import type { LayerStates, TagStates } from "../types";
  import { complementOf, intersectionOf } from "../utils";
  import Checkbox from "./ui/Checkbox.svelte";
  import Range from "./ui/Range.svelte";
  import maplibregl from "maplibre-gl";
  import "material-icons/iconfont/material-icons.css";

  type Props = {
    map: maplibregl.Map;
    layerStates: LayerStates;
    layer: LayerStates[number];
    tagStates: TagStates | undefined;
  };

  let { map, layerStates, layer, tagStates = [] }: Props = $props();

  /** 有効なタグのタグID一覧 */
  let enabledTags = $derived(
    tagStates?.filter((tag) => tag.enabled).map((tag) => tag.tagId) || []
  );

  /** タグIDからタグの表示名を取得 */
  const displayOf = (tagId: string) =>
    tagStates.filter((tag) => tag.tagId === tagId)[0]?.display;
</script>

<div
  class={`
    flex
    flex-col
    gap-2
    pb-2
    p-3
    bg-white
    ${enabledTags.length && !complementOf(enabledTags, layer.tags).length ? "border-2 border-blue-500" : "border"}
    rounded-xl
  `}
>
  <button
    class="flex items-center gap-1 hover:opacity-70"
    onclick={() => toggleLayerVisibility(map, layerStates, layer.layerId)}
  >
    <Checkbox checked={layer.visibility != "none"} />
    {layer.display}
  </button>

  <!-- タグの一覧 -->
  {#if layer.tags && intersectionOf( tagStates.map((tag) => tag.tagId), layer.tags ).length}
    <div class="flex flex-wrap items-center gap-1 pl-2">
      <span class="material-icons-outlined select-none !text-lg">sell</span>
      {#each layer.tags as tagId}
        <span class="px-2 py-1 bg-white rounded-full border text-xs">
          {displayOf(tagId)}
        </span>
      {/each}
    </div>
  {/if}

  <!-- 透過度レンジスライド -->
  {#if layer.opacityControl == true}
    <div>
      <Range
        value={layer.opacity}
        update={(val) =>
          setLayerOpacity(map, layerStates, layer.layerId, val)}
      />
    </div>
  {/if}
</div>
