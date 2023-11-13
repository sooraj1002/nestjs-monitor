export const panelConfig = (label: string) => {
  return {
    datasource: {
      type: 'prometheus',
      uid: 'PBFA97CFB590B2093',
    },
    fieldConfig: {
      defaults: {
        color: {
          mode: 'palette-classic',
        },
        custom: {
          axisBorderShow: false,
          axisCenteredZero: false,
          axisColorMode: 'text',
          axisLabel: '',
          axisPlacement: 'auto',
          barAlignment: 0,
          drawStyle: 'line',
          fillOpacity: 0,
          gradientMode: 'none',
          hideFrom: {
            legend: false,
            tooltip: false,
            viz: false,
          },
          insertNulls: false,
          lineInterpolation: 'linear',
          lineWidth: 1,
          pointSize: 5,
          scaleDistribution: {
            type: 'linear',
          },
          showPoints: 'auto',
          spanNulls: false,
          stacking: {
            group: 'A',
            mode: 'none',
          },
          thresholdsStyle: {
            mode: 'off',
          },
        },
        mappings: [],
        thresholds: {
          mode: 'absolute',
          steps: [
            {
              color: 'green',
              value: null,
            },
            {
              color: 'red',
              value: 80,
            },
          ],
        },
      },
      overrides: [],
    },
    gridPos: {
      h: 8,
      w: 12,
      x: 0,
      y: 0,
    },
    id: 1,
    options: {
      legend: {
        calcs: [],
        displayMode: 'list',
        placement: 'bottom',
        showLegend: true,
      },
      tooltip: {
        mode: 'single',
        sort: 'none',
      },
    },
    targets: [
      {
        datasource: {
          type: 'prometheus',
          uid: 'PBFA97CFB590B2093',
        },
        disableTextWrap: false,
        editorMode: 'builder',
        expr: label + '_bucket',
        fullMetaSearch: false,
        includeNullMetadata: true,
        instant: false,
        legendFormat: '__auto',
        range: true,
        refId: 'A',
        useBackend: false,
      },
    ],
    title: `${label} Interceptor Response Times`,
    type: 'timeseries',
  };
};
