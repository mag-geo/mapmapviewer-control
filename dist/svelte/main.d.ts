import type { Map, IControl } from 'maplibre-gl';
import MapMapViewerControlComponent from './MapMapViewerControl.svelte';
export { MapMapViewerControlComponent };
export type MapMapViewerControlOptions = {
    [key: string]: ControlOption;
};
export type ControlOption = LayerSpecification | GroupSpecification;
export type LayerSpecification = CommonSpecification & {
    type: 'layer';
    layerId: string;
    opacity?: number;
    opacityRange?: boolean;
};
export type GroupSpecification = CommonSpecification & {
    type: 'group';
    childrenTagList?: TagList;
    children: MapMapViewerControlOptions;
};
export type TagList = {
    [key: string]: {
        display: string;
        url?: string;
    };
};
export type CommonSpecification = {
    display: string;
    tags?: string[];
    details?: string;
    active?: boolean;
    visibility?: Visibility;
};
export type Visibility = 'visible' | 'none' | 'indeterminate';
export declare class MapMapViewerControl implements IControl {
    private options;
    private container;
    private map;
    constructor(options: MapMapViewerControlOptions);
    onAdd(map: Map): HTMLDivElement;
    onRemove(): void;
}
