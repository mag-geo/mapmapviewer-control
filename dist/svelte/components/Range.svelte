<script>export let map;
export let layerId;
export let opacity = void 0;
if (opacity === void 0) {
  const value = map.getPaintProperty(layerId, "raster-opacity");
  opacity = typeof value === "number" ? value * 100 : 100;
} else {
  map.setPaintProperty(layerId, "raster-opacity", opacity / 100);
}
$:
  if (layerId && opacity !== void 0) {
    map.setPaintProperty(layerId, "raster-opacity", opacity / 100);
  }
</script>

<input type="range" bind:value={opacity} />
