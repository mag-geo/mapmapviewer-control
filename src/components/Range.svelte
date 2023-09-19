<script lang="ts">
  import type { Map } from "maplibre-gl";

  export let map: Map;
  export let layerId: string;

  // レイヤーの透過度 0~100
  export let opacity: number | undefined = undefined;

  // 初期化
  if (opacity === undefined) {
    const value = map.getPaintProperty(layerId, "raster-opacity");
    opacity = typeof value === "number" ? value * 100 : 100;
  } else {
    map.setPaintProperty(layerId, "raster-opacity", opacity / 100);
  }

  // range が変更されたときにレイヤーの透過度を更新
  $: if (layerId && opacity !== undefined) {
    map.setPaintProperty(layerId, "raster-opacity", opacity / 100);
  }
</script>

<input type="range" bind:value={opacity} />
