import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        display: string;
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TagProps = typeof __propDef.props;
export type TagEvents = typeof __propDef.events;
export type TagSlots = typeof __propDef.slots;
export default class Tag extends SvelteComponent<TagProps, TagEvents, TagSlots> {
}
export {};
