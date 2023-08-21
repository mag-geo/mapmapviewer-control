import type { Map } from 'maplibre-gl';
import type { IControl } from 'maplibre-gl';
import MapMapViewerControlComponent from './MapMapViewerControl.svelte';

// Types for options
export type MapMapViewerControlOptions = { [key: string]: ControlSpecification | ControlParentSpecification };
export type CommonControlSpecification = {
  display: string,
  tags?: string[],
  details?: string,
  active?: boolean,
};
export type ControlSpecification = CommonControlSpecification & {
  layerId: string,
  opacityRange?: boolean,
};
export type TagList = { [key: string] : {
  display: string,
  url?: string,
}};
export type ControlParentSpecification = CommonControlSpecification & {
  childrenTagList?: TagList,
  children: MapMapViewerControlOptions,
  visibility?: 'visible' | 'none',
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
