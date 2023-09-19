import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapMapViewerControl, type MapMapViewerControlOptions } from '../src/main.ts';

// Add a base map
const map = new Map({
  container: 'map',
  style: {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: ['https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png'],
        tileSize: 256,
        attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
      },
    },
    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'osm',
      }
    ],
  },
  center: [136.3, 38.5],
  zoom: 5,
  hash: true
});

map.on('load', () => {
  // 国土地理院 標準地図
  map.addSource('gsi_std', {
    type: 'raster',
    tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'],
    tileSize: 256,
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
  });
  map.addLayer({
    id: 'gsi_std',
    type: 'raster',
    source: 'gsi_std',
    layout: { visibility: 'none' },
  });

  // 国土地理院 淡色地図
  map.addSource('gsi_pale', {
    type: 'raster',
    tiles: ['https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'],
    tileSize: 256,
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
  });
  map.addLayer({
    id: 'gsi_pale',
    type: 'raster',
    source: 'gsi_pale',
  });

  // 国土地理院 淡色地図
  map.addSource('gsi_seamlessphoto', {
    type: 'raster',
    tiles: ['https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'],
    tileSize: 256,
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
  });
  map.addLayer({
    id: 'gsi_seamlessphoto',
    type: 'raster',
    source: 'gsi_seamlessphoto',
    paint: { 'raster-opacity': 0.5 },
  });

  const options: MapMapViewerControlOptions = {
    gsi: {
      type: 'group',
      display: '国土地理院',
      childrenTagList: {
        gsi: {display: '国土地理院', url: 'https://maps.gsi.go.jp/development/ichiran.html' },
        map: {display: '地図'},
        seamlessphoto: {display: '写真' },
      },
      children: {
        map: {
          type: 'group',
          display: '地図',
          tags: ['gsi', 'map'],
          childrenTagList: {
            std: {display: '標準' },
            pale: {display: '淡色' },
          },
          children: {
            std: {
              type: 'layer',
              layerId: 'gsi_std',
              display: '標準',
              details: '国土地理院 標準地図',
              tags: ['std'],
              opacityRange: true,
            },
            pale: {
              type: 'layer',
              layerId: 'gsi_pale',
              display: '淡色',
              details: '国土地理院 淡色地図',
              tags: ['pale'],
              opacityRange: true,
            },
          },
        },
        seamlessphoto: {
          type: 'layer',
          layerId: 'gsi_seamlessphoto',
          display: '写真',
          details: '国土地理院 写真',
          tags: ['gsi', 'seamlessphoto'],
          opacityRange: true,
        },
      },
    },
  };

  // Add the sample control
  const Control = new MapMapViewerControl(options);
  map.addControl(Control);
});
