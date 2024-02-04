<script>import Control from "./components/Control.svelte";
export let map;
export let options;
</script>

<div class="maplibregl-ctrl maplibregl-ctrl-group" id="mapmapviewer-control">
  <Control {map} bind:options />
</div>

<style>#mapmapviewer-control {
  padding: 1em 2em;
}
#mapmapviewer-control > :global(.mmvc) > :global(.mmvc-node) {
  border: none;
  padding-left: 0;
}</style>
