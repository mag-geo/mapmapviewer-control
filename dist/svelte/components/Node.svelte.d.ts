import { SvelteComponent } from "svelte";
import type { Map } from "maplibre-gl";
import type { ControlOption, TagList as TagListSpecification } from "../main";
declare const __propDef: {
    props: {
        map: Map;
        option: ControlOption;
        tagList: TagListSpecification;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NodeProps = typeof __propDef.props;
export type NodeEvents = typeof __propDef.events;
export type NodeSlots = typeof __propDef.slots;
export default class Node extends SvelteComponent<NodeProps, NodeEvents, NodeSlots> {
}
export {};
