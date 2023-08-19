<script lang="ts">
  import type { Map } from "maplibre-gl";

  export let map: Map;
  export let text: string = "hello, world!";

  function flyToSapporo () {
    map.flyTo({
      center: [141.34, 43.07],
      zoom: 10,
      speed: 0.8,
    });
  };
</script>

<div class="maplibregl-ctrl maplibregl-ctrl-group" id="mapmapviewer-control">
  <p>{text}</p>
  <input type="button" value="Fly to the Sapporo" on:click={flyToSapporo}>
</div>

<style lang="scss">
  #mapmapviewer-control {
    padding: 10px;
  }
</style>
