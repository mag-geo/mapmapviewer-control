import MapMapViewerControlComponent from './MapMapViewerControl.svelte';
export { MapMapViewerControlComponent };
export class MapMapViewerControl {
    constructor(options) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.options = options;
        this.map = null;
    }
    ;
    onAdd(map) {
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
    }
    ;
    onRemove() {
        // Refly the container
        this.container.parentNode?.removeChild(this.container);
        this.map = null;
    }
    ;
}
;
