import type { Map } from 'maplibre-gl';
import type { IControl } from 'maplibre-gl';
import MapMapViewerControlComponent from './MapMapViewerControl.svelte';

// Types for options
export type MapMapViewerControlOptions = { [key: string]: ControlOption };
export type ControlOption = LayerSpecification | GroupSpecification;
export type CommonSpecification = {
  display: string,
  tags?: string[],
  details?: string,
  active?: boolean,
  visibility?: 'visible' | 'none',
};
export type LayerSpecification = CommonSpecification & {
  type: 'layer',
  layerId: string,
  opacity?: number,
  opacityRange?: boolean,
};
export type TagList = { [key: string] : {
  display: string,
  url?: string,
}};
export type GroupSpecification = CommonSpecification & {
  type: 'group',
  childrenTagList?: TagList,
  children: MapMapViewerControlOptions,
};

export class MapMapViewerControl implements IControl {
  private options: MapMapViewerControlOptions;
  private container!: HTMLDivElement;
  private map: Map | null;

  constructor(options: MapMapViewerControlOptions) {
    this.options = options;
    this.map = null;
  };

  onAdd(map: Map) {
    this.container = document.createElement('div');
    this.map = map;

    // Add a cotrol component
    new MapMapViewerControlComponent({
      target: this.container,
      props: {
        map: this.map,
        options: this.options,
      }
    });

    // Add the control
    return this.container;
  };

  onRemove() {
    // Refly the container
    this.container.parentNode?.removeChild(this.container);
    this.map = null;
  };
};
