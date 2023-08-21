<script lang="ts">
  import type { Map } from "maplibre-gl";
  import type { MapMapViewerControlOptions, TagList } from "../main.ts";
  import Control from './Control.svelte';

  export let map: Map;
  export let options: MapMapViewerControlOptions;
  export let tagList: TagList = {};

  // Reactive vars for visiblity of layers
  let visibility = Object.fromEntries(Object.entries(options).map(([key, option]) => {
    if ('layerId' in option) {
      return [key, map.getLayoutProperty(option.layerId, 'visibility') !== 'none'];
    } else {
      return [key, option.visibility !== 'none'];
    }
  }));

  // Update visiblity of layers when 'visibility' updates
  $: Object.entries(visibility).forEach(([key, value]) => {
    const option = options[key];
    if ('layerId' in option) {
      map.setLayoutProperty(option.layerId, 'visibility', value ? 'visible' : 'none');
    } else {
      // TODO: for collection
    }
  });

  // Reactive vars for opacities of raster layers
  let opacity = Object.fromEntries(Object.entries(options).map(([key, option]) => {
    const defaultValue = 100;
    if ('layerId' in option) {
      const value = map.getPaintProperty(option.layerId, 'raster-opacity');
      if (typeof value === 'number') {
        return [key, value * 100];
      } else {
        return [key, defaultValue];
      }
    } else {
      return [key, undefined];
    }
  }));

  // Update opacity of raster layers when 'opacity' updates
  $: Object.entries(opacity).forEach(([key, value]) => {
    const option = options[key];
    if ('layerId' in option && value !== undefined) {
      map.setPaintProperty(option.layerId, 'raster-opacity', value / 100);
    }
  });
</script>

<!-- TODO: filter by tags -->

{#each Object.entries(options) as [key, option]}
  <div class="mmvc">
    <label>
      <h3>{option.display}</h3>
      <input type="checkbox" bind:checked={visibility[key]} />
    </label>

    {#if option.details !== undefined}
      <details>
        <summary>details</summary>
        {option.details}
      </details>
    {/if}

    {#if option.tags}
      <div class="mmvc-tag">
        {#each option.tags as tag}
          {#if tag in tagList}
            {#if tagList[tag].url}
              <a href={tagList[tag].url} target="_blank"><span>{tagList[tag].display}</span></a>
            {:else}
              <span>{tagList[tag].display}</span>
            {/if}
          {/if}
        {/each}
      </div>
    {/if}

    {#if 'opacityRange' in option}
      <input type="range" bind:value={opacity[key]} />
    {/if}

    {#if 'children' in option}
      {#if option.childrenTagList}
        <div class="mmvc-tag">
          {#each Object.entries(option.childrenTagList) as [_, tag] }
            <span>{tag.display}</span>
          {/each}
        </div>
      {/if}
      <Control map={map} options={option.children} tagList={option.childrenTagList} />
    {/if}
  </div>
{/each}

<style lang="scss">
  .mmvc {
    margin-left: 1em;

    label {
      display: flex;
      justify-content: space-between;
      gap: 1em;
    }

    .mmvc-tag {
      display: flex;
      gap: 0.5em;

      span::before {
        content: '#';
        padding-right: 0.1em;
      }
    }
  }
</style>
