<!-- レンジスライド -->
<script lang="ts">
  /** 値 (`0` ~ `100`) */
  export let value: number | undefined;

  /** スライドをクリックした後に実行される関数 */
  export let onclick: () => void = () => {};
</script>

<input type="range" class="w-full" bind:value {onclick} />
