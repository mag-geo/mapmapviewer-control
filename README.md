# maplibre-gl-layer-manager

`maplibre-gl-layer-manager` は、MapLibre GL JS を使用した地図上のレイヤー管理を簡単に行うためのライブラリです。

[デモ](https://mag-geo.github.io/maplibre-gl-layer-manager/)

![デモサイトのスクリーンショット](https://github.com/user-attachments/assets/d361c547-cd1b-4898-909b-d1f6c8e847c8)

## インストール

```sh
npm install @mag-geo/maplibre-gl-layer-manager
```

## 使い方

[`src/routes/+page.svelte`](https://github.com/mag-geo/maplibre-gl-layer-manager/blob/dev/src/routes/%2Bpage.svelte) を参照

```svelte
<script lang="ts">
  import {
    MapLibre,
    RasterTileSource,
    RasterLayer,
  } from "svelte-maplibre-gl";
  import maplibregl from "maplibre-gl";
  import { LayerManager, type LayerList, type TagList } from "@mag-geo/maplibre-gl-layer-manager";

  let map: maplibregl.Map | undefined;

  // レイヤー設定
  const layerList: LayerList = [
    {
      layerId: "gsi_std",
      display: "国土地理院 標準地図",
      tags: ["gsi"],
    },
    {
      layerId: "openstreetmap",
      display: "OpenStreetMap",
      tags: ["osm"],
    },
  ];

  // タグ設定
  const tagList: TagList = [
    { tagId: "gsi", display: "国土地理院" },
    { tagId: "osm", display: "OpenStreetMap" },
  ];
</script>

<MapLibre bind:map zoom={5} center={[136.3, 38.5]}>
  <RasterTileSource
    tiles={["https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"]}
    tileSize={256}
  >
    <RasterLayer id="gsi_std" layout={{ visibility: "none" }} />
  </RasterTileSource>

  <RasterTileSource
    tiles={["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"]}
    tileSize={256}
  >
    <RasterLayer id="openstreetmap" />
  </RasterTileSource>
</MapLibre>

<!-- レイヤーマネージャーの UI -->
{#if map}
  <LayerManager bind:map {layerList} {tagList} />
{/if}
```

## ライセンス

MIT License
