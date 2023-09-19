<script lang="ts">
  import type { Map } from "maplibre-gl";
  import type { Visibility } from "../main";

  export let map: Map;
  export let layerId: string;

  // 'visible': 表示, 'none': 非表示, TODO: 'indeterminate': 中間状態
  export let visibility: Visibility | undefined = undefined;

  // 初期化
  if (visibility === undefined) {
    visibility = map.getLayoutProperty(layerId, "visibility") || 'visible';
  } else {
    map.setLayoutProperty(layerId, "visibility", visibility);
  }

  // checkbox の状態
  $: checked = visibility === 'visible';
  $: indeterminate = visibility === 'indeterminate';

  // checkbox が変更されたときにレイヤーの表示/非表示を更新
  $: if (visibility !== 'indeterminate') map.setLayoutProperty(layerId, "visibility", visibility);

  // checkbox の更新で visibility も更新
  const updateVisiblity = () => {
    visibility = checked ? 'visible' : 'none';
  };
</script>

<input type="checkbox" bind:checked bind:indeterminate on:change={updateVisiblity} />
