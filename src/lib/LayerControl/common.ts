import mapliblegl from "maplibre-gl";
import type { LayerStates } from "./types";

/**
 * `layerId` から表示性(表示の有無)を取得
 * @param layerStates レイヤーの状態を格納した配列
 * @param layerId 表示性を変更するレイヤーの layerId
 * @returns 表示性 (`'visible'` or `'none'`)
 */
export const getLayerVisibility = (
  map: mapliblegl.Map,
  layerStates: LayerStates,
  layerId: string
): "visible" | "none" =>
  // layerList の状態を優先し, 設定されてなかったら map のレイヤーの状態を返す
  layerStates.filter((layer) => layer.layerId === layerId)[0]?.visibility ||
  map.getLayoutProperty(layerId, "visibility") ||
  "visible"; // 既定値

/**
 * `layerId` から表示性(表示の有無)を更新
 * @param layerStates レイヤーの状態を格納した配列
 * @param layerId 表示性を変更するレイヤーの layerId
 * @param visibility 表示性 (`'visible'` or `'none'`)
 */
export const setLayerVisibility = (
  map: mapliblegl.Map,
  layerStates: LayerStates,
  layerId: string,
  visibility: "visible" | "none"
) =>
  layerStates
    .filter((layer) => layer.layerId === layerId)
    .forEach((layer) => {
      // layerList の visibility を更新
      layer.visibility = visibility;
      // map のレイヤーの状態を更新
      map.setLayoutProperty(layerId, "visibility", visibility);
    });

/**
 * `layerId` から表示性(表示の有無)を以下に従ってトグル
 * - `"none"` → `"visible"`
 * - `"visible"` → `"none"`
 * @param LayerStates レイヤーの状態を格納した配列
 * @param layerId 表示性を変更するレイヤーの layerId
 */
export const toggleLayerVisibility = (
  map: maplibregl.Map,
  layerStates: LayerStates,
  layerId: string
) =>
  getLayerVisibility(map, layerStates, layerId) !== "visible"
    ? setLayerVisibility(map, layerStates, layerId, "visible")
    : setLayerVisibility(map, layerStates, layerId, "none");

/**
 * `layerId` から透過度を取得
 * @param layerStates レイヤーの状態を格納した配列
 * @param layerId 透過度を変更するレイヤーの layerId
 * @returns 透過性 (`0` ~ `100`)
 */
export const getLayerOpacity = (
  map: mapliblegl.Map,
  layerStates: LayerStates,
  layerId: string
): number => {
  for (const layer of layerStates) {
    if (layer.layerId === layerId) {
      if (layer.opacity !== undefined) {
        return layer.opacity;
      } else {
        /** 地図の状態から取得した透過度 */
        const opacity = map.getPaintProperty(layerId, "raster-opacity");
        if (opacity !== undefined) return Number(opacity) * 100;
      }
    }
  }

  // 既定値を返す
  return 100;
};

/**
 * `layerId` から透過度を更新
 * @param layerStates レイヤーの状態を格納した配列
 * @param layerId 透過度を変更するレイヤーの layerId
 * @param opacity 表示性 (`'visible'` or `'none'`)
 */
export const setLayerOpacity = (
  map: mapliblegl.Map,
  layerStates: LayerStates,
  layerId: string,
  opacity: number | undefined
) =>
  layerStates
    .filter((layer) => layer.layerId === layerId)
    .forEach((layer) => {
      // layerList の visibility を更新
      layer.opacity = opacity;
      // map のレイヤーの状態を更新
      map.setPaintProperty(
        layerId,
        "raster-opacity",
        opacity === undefined ? 1 : opacity / 100
      );
    });

/**
 * `map` の状態から `layerList` を更新
 * @param layerStates レイヤーの状態を格納した配列
 */
export const updateLayersFromMap = (
  map: mapliblegl.Map,
  layerStates: LayerStates
) => {
  /** 地図に追加されてるレイヤーの一覧 */
  const layerIds = map.getStyle().layers.map((l) => l.id);

  for (const layer of layerStates) {
    if (layerIds.includes(layer.layerId)) {
      // 表示性を更新
      setLayerVisibility(
        map,
        layerStates,
        layer.layerId,
        map.getLayoutProperty(layer.layerId, "visibility")
      );

      // 透過度を更新
      /** 地図の状態から取得した透過度 */
      const opacity = map.getPaintProperty(layer.layerId, "raster-opacity");
      setLayerOpacity(
        map,
        layerStates,
        layer.layerId,
        opacity === undefined ? 100 : Number(opacity) * 100
      );
    }
  }
};
