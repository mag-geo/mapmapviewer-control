<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import maplibregl from "maplibre-gl";
  import type { LayerList, LayerStates, TagList, TagStates } from "./types";
  import { updateLayersFromMap } from "./common";
  import TagButton from "./components/ui/TagButton.svelte";
  import Card from "./components/Card.svelte";
  import "material-icons/iconfont/material-icons.css";
  import { complementOf } from "./utils";

  type Props = {
    map: maplibregl.Map;
    layerList: LayerList;
    tagList?: TagList;
  };

  let { map = $bindable(), layerList, tagList }: Props = $props();

  /** レイヤーの状態を格納する配列 */
  let layerStates: LayerStates = $state(layerList);

  /** タグの状態を格納する配列 */
  let tagStates: TagStates | undefined = $state(tagList);

  /** 有効なタグのタグID一覧 */
  let enabledTags: string[] = $derived(
    tagStates?.filter((tag) => tag.enabled).map((tag) => tag.tagId) || []
  );

  /** map が読み込まれているかのフラグ */
  let loaded = $state(Boolean(map.getStyle()) || map.loaded());

  /** 地図が読み込まれたときに実行される関数 */
  const loadFunc = () => {
    // map 読み込み済のフラグを立てる
    loaded = true;

    // 地図の状態からレイヤー状態の配列を更新
    updateLayersFromMap(map, layerStates);
  };

  /** 地図が更新されたときに実行される関数 */
  const styledataFunc = () => {
    // 地図の状態からレイヤー状態の配列を更新
    updateLayersFromMap(map, layerStates);
  };

  /** コンポーネントが追加されたときに実行される関数 */
  const mountFunc = () => {
    // 地図の状態からレイヤー状態の配列を更新
    if (loaded) updateLayersFromMap(map, layerStates);
  };

  /** 「タグで絞り込み」の開閉フラグ */
  let tagBox = $state(false);

  onMount(() => {
    mountFunc();
    map.on("load", loadFunc);
    map.on("styledata", styledataFunc);
  });

  onDestroy(() => {
    map.off("load", loadFunc);
    map.off("styledata", styledataFunc);
  });
</script>

{#if loaded}
  <!-- タグで絞り込み -->
  {#if tagStates?.length}
    <div class="flex flex-col gap-2 mb-4">
      <!-- タグ一覧の開閉ボタン -->
      <button onclick={() => (tagBox = !tagBox)} class="flex items-center">
        <span class="material-icons">
          {#if tagBox}remove{:else}add{/if}
        </span>
        タグで絞り込む
      </button>

      <!-- タグ一覧 -->
      {#if tagBox}
        <div class="flex flex-wrap gap-2">
          <!-- 有効になっているタグがあるときに, 一括で解除するボタン -->
          {#if tagStates.filter((tag) => tag.enabled).length}
            <button
              class="text-sm select-none hover:underline"
              onclick={() => tagStates.forEach((tag) => (tag.enabled = false))}
            >
              選択を解除
            </button>
          {/if}

          <!-- 有効なタグ -->
          {#each tagStates.filter((tag) => tag.enabled) as tag}
            <TagButton
              display={tag.display}
              onclick={() => (tag.enabled = false)}
              enabled={true}
            />
          {/each}

          <!-- 有効でないタグ -->
          {#each tagStates.filter((tag) => !tag.enabled) as tag}
            <TagButton
              display={tag.display}
              onclick={() => (tag.enabled = true)}
            />
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <!-- レイヤーの一覧 -->
  <div class="flex flex-col gap-3">
    <!-- 有効なタグを持つレイヤーの一覧 -->
    {#each layerStates.filter((layer) => !complementOf(enabledTags, layer.tags).length) as layer}
      <Card {map} {layerStates} {layer} {tagStates} />
    {/each}

    <!-- タグを持たないレイヤーの一覧 -->
    <!-- あるいは, 有効なタグを持たないレイヤーの一覧 -->
    {#each layerStates.filter((layer) => !layer.tags?.length || complementOf(enabledTags, layer.tags).length) as layer}
      <Card {map} {layerStates} {layer} {tagStates} />
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}
