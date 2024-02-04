import { SvelteComponent } from "svelte";
import type { TagList } from "../main";
declare const __propDef: {
    props: {
        tags: string[] | undefined;
        tagList: TagList;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TagsProps = typeof __propDef.props;
export type TagsEvents = typeof __propDef.events;
export type TagsSlots = typeof __propDef.slots;
export default class Tags extends SvelteComponent<TagsProps, TagsEvents, TagsSlots> {
}
export {};
