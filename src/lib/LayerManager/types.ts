/**
 * レイヤーのリスト型
 * @param layerId 制御対象のレイヤーID
 * @param display 表示名
 * @param opacityControl 透過度をコントロールするレンジスライドを表示するか (`true`, `false`(既定値))
 * @param tags タグIDのリスト
 */
export type LayerList = {
  layerId: string;
  display: string;
  opacityControl?: boolean;
  tags?: string[];
}[];

/**
 * レイヤーの状態を格納する型
 * @param visibility レイヤーの表示性 (`'visible'`(既定値), `'none'`)
 * @param opacity レイヤーの透過度 (`0` ~ `100`(既定値))
 */
export type LayerStates = (LayerList[number] & {
  visibility?: "visible" | "none";
  opacity?: number;
})[];

/**
 * タグの一覧の型
 * @param tagId タグの名前
 * @param display 表示名
 * @param color タグの色
 */
export type TagList = {
  tagId: string;
  display: string;
  color?: string;
}[];

/**
 * タグの状態を格納する型
 * @param enabled タグが有効になっているか (`true`, `false`(既定値))
 */
export type TagStates = (TagList[number] & {
  enabled?: boolean;
})[];
