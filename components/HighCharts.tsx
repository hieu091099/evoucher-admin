'use client'
import React from 'react';
import Highchart from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

if (typeof Highchart === 'object') {
  HighchartsExporting(Highchart);
}

const Highcharts = (props: HighchartsReact.Props) => {
  const { title, type, data, options, style } = props;

  const chartOptions = {
    title: {
      text: title || 'My chart',
    },
    series: [
      {
        type: type || 'line',
        data: data,
      },
    ],
    ...options,
  };

  return (
    <HighchartsReact containerProps={style} highcharts={Highchart} options={chartOptions} {...props} />
  );
};

export default Highcharts;
