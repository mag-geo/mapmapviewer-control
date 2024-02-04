import { SvelteComponent } from "svelte";
import type { Map } from "maplibre-gl";
import type { Visibility } from "../main";
declare const __propDef: {
    props: {
        map: Map;
        layerId: string;
        visibility?: Visibility | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
