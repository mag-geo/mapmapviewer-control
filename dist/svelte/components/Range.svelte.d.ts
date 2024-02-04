import { SvelteComponent } from "svelte";
import type { Map } from "maplibre-gl";
declare const __propDef: {
    props: {
        map: Map;
        layerId: string;
        opacity?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeProps = typeof __propDef.props;
export type RangeEvents = typeof __propDef.events;
export type RangeSlots = typeof __propDef.slots;
export default class Range extends SvelteComponent<RangeProps, RangeEvents, RangeSlots> {
}
export {};
