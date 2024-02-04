import { SvelteComponent } from "svelte";
import type { Map } from "maplibre-gl";
import type { MapMapViewerControlOptions } from "./main.ts";
declare const __propDef: {
    props: {
        map: Map;
        options: MapMapViewerControlOptions;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MapMapViewerControlProps = typeof __propDef.props;
export type MapMapViewerControlEvents = typeof __propDef.events;
export type MapMapViewerControlSlots = typeof __propDef.slots;
export default class MapMapViewerControl extends SvelteComponent<MapMapViewerControlProps, MapMapViewerControlEvents, MapMapViewerControlSlots> {
}
export {};
