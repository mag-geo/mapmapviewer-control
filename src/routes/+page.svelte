<script lang="ts">
  import {
    MapLibre,
    NavigationControl,
    RasterTileSource,
    RasterLayer,
    CustomControl,
  } from "svelte-maplibre-gl";
  import maplibregl from "maplibre-gl";
  import "material-icons/iconfont/material-icons.css";
  import {
    LayerControl,
    type LayerList,
    type TagList,
  } from "$lib/LayerControl";

  let map: maplibregl.Map | undefined = $state.raw();

  /** LayerControl 用のレイヤーの設定 */
  const layerList: LayerList = [
    {
      layerId: "gsi_std",
      display: "国土地理院 標準地図",
      tags: ["gsi", "map"],
    },
    {
      layerId: "openstreetmap",
      display: "OpenStreetMap",
      tags: ["osm", "map"],
    },
    {
      layerId: "opentopomap",
      display: "OpenTopoMap",
      tags: ["osm", "map"],
    },
    {
      layerId: "gsi_seamlessphoto",
      display: "国土地理院 航空写真",
      opacityControl: true,
      tags: ["gsi"],
    },
    {
      layerId: "gsi_hillshademap",
      display: "国土地理院 陰影起伏図",
      opacityControl: true,
      tags: ["gsi"],
    },
    {
      layerId: "openrailwaymap",
      display: "OpenRailwayMap",
      tags: ["osm"],
    },
  ];

  /** LayerControl 用のタグの設定 */
  const tagList: TagList = [
    { tagId: "map", display: "地図" },
    { tagId: "gsi", display: "国土地理院" },
    { tagId: "osm", display: "OpenStreetMap" },
  ];

  /** 右パネルの開閉フラグ */
  let rightPanel = $state(false);
</script>

<div class="flex">
  <MapLibre bind:map class="h-screen w-full" zoom={5} center={[136.3, 38.5]}>
    <NavigationControl />

    <!-- 国土地理院 淡色地図 -->
    <RasterTileSource
      tiles={["https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"]}
      tileSize={256}
      attribution={'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'}
    >
      <RasterLayer id="gsi_pale" />
    </RasterTileSource>

    <!-- 国土地理院 標準 -->
    <RasterTileSource
      tiles={["https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"]}
      tileSize={256}
      attribution={'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'}
    >
      <RasterLayer id="gsi_std" layout={{ visibility: "none" }} />
    </RasterTileSource>

    <!-- OpenStreetMap -->
    <RasterTileSource
      tiles={["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"]}
      tileSize={256}
      attribution={'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>'}
    >
      <RasterLayer id="openstreetmap" />
    </RasterTileSource>

    <!-- OpenTopoMap -->
    <RasterTileSource
      tiles={["https://a.tile.opentopomap.org/{z}/{x}/{y}.png"]}
      tileSize={256}
      attribution={'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a> (<a href="http://viewfinderpanoramas.org/">SRTM</a>, Ⓒ <a href="https://opentopomap.org/">OpenTopoMap</a>)'}
    >
      <RasterLayer id="opentopomap" layout={{ visibility: "none" }} />
    </RasterTileSource>

    <!-- 国土地理院 航空写真 -->
    <RasterTileSource
      tiles={[
        "https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg",
      ]}
      tileSize={256}
      attribution={'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'}
    >
      <RasterLayer
        id="gsi_seamlessphoto"
        layout={{ visibility: "none" }}
        paint={{ "raster-opacity": 0.5 }}
      />
    </RasterTileSource>

    <!-- 国土地理院 陰影起伏図 -->
    <RasterTileSource
      tiles={[
        "https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png",
      ]}
      tileSize={256}
      attribution={'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'}
    >
      <RasterLayer id="gsi_hillshademap" paint={{ "raster-opacity": 0.3 }} />
    </RasterTileSource>

    <!-- OpenRailwayMap -->
    <RasterTileSource
      tiles={["https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"]}
      tileSize={256}
      attribution={'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a> (<a href="http://www.openrailwaymap.org/">OpenRailwayMap</a>)'}
    >
      <RasterLayer id="openrailwaymap" paint={{ "raster-opacity": 0.8 }} />
    </RasterTileSource>

    <!-- 右パネルの開閉ボタン -->
    <CustomControl position="top-right">
      <button
        onclick={() => (rightPanel = !rightPanel)}
        class="!flex items-center justify-center text-gray-900"
      >
        {#if rightPanel}
          <span class="material-icons-outlined !text-xl text-blue-600"
            >format_list_bulleted</span
          >
        {:else}
          <span class="material-icons-outlined !text-xl"
            >format_list_bulleted</span
          >
        {/if}
      </button>
    </CustomControl>

    <!-- レイヤーの表示/非表示ボタン -->
    <CustomControl position="top-right">
      <button
        onclick={() =>
          map?.getLayoutProperty("openrailwaymap", "visibility") === "none"
            ? map?.setLayoutProperty("openrailwaymap", "visibility", "visible")
            : map?.setLayoutProperty("openrailwaymap", "visibility", "none")}
        class="!flex items-center justify-center text-gray-900"
      >
        {#if map?.getLayoutProperty("openrailwaymap", "visibility") === "none"}
          <span class="material-icons-outlined !text-xl">train</span>
        {:else}
          <span class="material-icons-outlined !text-xl text-blue-600"
            >train</span
          >
        {/if}
      </button>
    </CustomControl>
  </MapLibre>

  <!-- 右パネル -->
  {#if rightPanel}
    <nav class="w-[450px] max-h-screen overflow-x-auto">
      <header class="flex p-3 pb-0">
        <h2 class="mr-auto text-2xl">レイヤー切り替え</h2>
        <button
          class="material-icons !text-2xl"
          onclick={() => (rightPanel = !rightPanel)}>close</button
        >
      </header>

      <!-- レイヤーコントロール -->
      {#if map}
        <main class="p-3">
          <LayerControl bind:map {layerList} {tagList} />
        </main>
      {/if}
    </nav>
  {/if}
</div>
