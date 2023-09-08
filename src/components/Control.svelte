<script lang="ts">
  import type { Map } from "maplibre-gl";
  import type { MapMapViewerControlOptions, TagList } from "../main.ts";
  import Node from "./Node.svelte";

  export let map: Map;
  export let options: MapMapViewerControlOptions;
  export let tagList: TagList = {};
</script>

{#each Object.entries(options) as [_, option]}
  <div class="mmvc">
    <Node {map} {option} {tagList} />
  </div>
{/each}

<style lang="scss">
</style>
