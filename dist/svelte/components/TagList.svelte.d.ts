import { SvelteComponent } from "svelte";
import type { TagList } from "../main";
declare const __propDef: {
    props: {
        tagList: TagList;
        enabledTags?: string[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TagListProps = typeof __propDef.props;
export type TagListEvents = typeof __propDef.events;
export type TagListSlots = typeof __propDef.slots;
export default class TagList extends SvelteComponent<TagListProps, TagListEvents, TagListSlots> {
}
export {};
