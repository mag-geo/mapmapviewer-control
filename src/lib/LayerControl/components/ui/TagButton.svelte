<script lang="ts">
  import "material-icons/iconfont/material-icons.css";

  /** ボタン内に表示する名前 */
  export let display: string;

  /** ボタンを押したときに実行する関数 */
  export let onclick: () => void = () => {};

  /** 有効になっているか */
  export let enabled: boolean = false;
</script>

<button
  class={`
    flex
    items-center
    gap-1
    h-8
    ${enabled ? "bg-blue-200 hover:bg-blue-300" : "bg-slate-100 hover:bg-slate-200"}
    rounded-md
    px-2
    text-sm
    select-none
  `}
  {onclick}
>
  {display}
  {#if enabled}
    <span class="material-icons !text-xl">close</span>
  {/if}
</button>
