import { SvelteComponent } from "svelte";
import type { Map } from "maplibre-gl";
import type { MapMapViewerControlOptions, TagList } from "../main.ts";
declare const __propDef: {
    props: {
        map: Map;
        options: MapMapViewerControlOptions;
        tagList?: TagList | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ControlProps = typeof __propDef.props;
export type ControlEvents = typeof __propDef.events;
export type ControlSlots = typeof __propDef.slots;
export default class Control extends SvelteComponent<ControlProps, ControlEvents, ControlSlots> {
}
export {};
