import type { Map } from 'maplibre-gl';
import type { IControl } from 'maplibre-gl';
import MapMapViewerControlComponent from './MapMapViewerControl.svelte';

// Type for options
interface Options {
  text: string;
};

// Default options
const defaultOptions: Options = {
  text: 'Hello, world!',
};

export class MapMapViewerControl implements IControl {
  private text: string;
  private container!: HTMLDivElement;
  private map: Map | null;

  constructor(options?: Options) {
    this.text = options?.text || defaultOptions.text;
    this.map = null;
  };

  onAdd(map: Map) {
    this.container = document.createElement('div');
    this.map = map;

    new MapMapViewerControlComponent({
      target: this.container,
      props: {
        map: this.map,
        text: this.text,
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
