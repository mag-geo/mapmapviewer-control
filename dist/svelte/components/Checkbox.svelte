<script>export let map;
export let layerId;
export let visibility = void 0;
if (visibility === void 0) {
  visibility = map.getLayoutProperty(layerId, "visibility") || "visible";
} else {
  map.setLayoutProperty(layerId, "visibility", visibility);
}
$:
  checked = visibility === "visible";
$:
  indeterminate = visibility === "indeterminate";
$:
  if (visibility !== "indeterminate")
    map.setLayoutProperty(layerId, "visibility", visibility);
const updateVisiblity = () => {
  visibility = checked ? "visible" : "none";
};
</script>

<input type="checkbox" bind:checked bind:indeterminate on:change={updateVisiblity} />
