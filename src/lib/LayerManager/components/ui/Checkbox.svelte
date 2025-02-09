<script lang="ts">
  import "material-icons/iconfont/material-icons.css";

  /** `true`: チェック状態, `false`: チェック解除 */
  export let checked: Boolean = false;
</script>

<span class="material-icons select-none">
  {#if checked}
    check_box
  {:else}
    check_box_outline_blank
  {/if}
</span>
