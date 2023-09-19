<script lang="ts">
  import type { Map } from "maplibre-gl";
  import type { MapMapViewerControlOptions } from "./main.ts";
  import Control from "./components/Control.svelte";

  export let map: Map;
  export let options: MapMapViewerControlOptions;
</script>

<div class="maplibregl-ctrl maplibregl-ctrl-group" id="mapmapviewer-control">
  <Control {map} bind:options />
</div>

<style lang="scss">
  #mapmapviewer-control {
    padding: 1em 2em;

    > :global(.mmvc) > :global(.mmvc-node) {
      border: none;
      padding-left: 0;
    }
  }
</style>
