import type { IControl } from 'maplibre-gl';
import type { Map as Map_2 } from 'maplibre-gl';
import { SvelteComponentTyped as MapMapViewerControlComponent } from 'svelte';

export declare type CommonSpecification = {
    display: string;
    tags?: string[];
    details?: string;
    active?: boolean;
    visibility?: Visibility;
};

export declare type ControlOption = LayerSpecification | GroupSpecification;

export declare type GroupSpecification = CommonSpecification & {
    type: 'group';
    childrenTagList?: TagList;
    children: MapMapViewerControlOptions;
};

export declare type LayerSpecification = CommonSpecification & {
    type: 'layer';
    layerId: string;
    opacity?: number;
    opacityRange?: boolean;
};

export declare class MapMapViewerControl implements IControl {
    private options;
    private container;
    private map;
    constructor(options: MapMapViewerControlOptions);
    onAdd(map: Map_2): HTMLDivElement;
    onRemove(): void;
}

export { MapMapViewerControlComponent }

export declare type MapMapViewerControlOptions = {
    [key: string]: ControlOption;
};

export declare type TagList = {
    [key: string]: {
        display: string;
        url?: string;
    };
};

export declare type Visibility = 'visible' | 'none' | 'indeterminate';

export { }
