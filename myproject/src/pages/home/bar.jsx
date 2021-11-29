import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend} from 'bizcharts';
import DataSet from '@antv/data-set';

/**
 * 使用bizCharts完成图表
 */
 export default class Bar extends Component {
	render() {
		//数据源
		const data = [
      {
        name:'weizai',
        'Jan.': 18.9,
				'Feb.': 28.8,
				'Mar.': 39.3,
				'Apr.': 81.4,
				May: 47,
				'Jun.': 20.3,
				'Jul.': 24,
				'Aug.': 35.6

      },
      {
        name: 'mengshenxian',
				'Jan.': 12.4,
				'Feb.': 23.2,
				'Mar.': 34.5,
				'Apr.': 79.7,
				May: 52.6,
				'Jun.': 35.5,
				'Jul.': 37.4,
				'Aug.': 42.4
      }
		];

		const ds = new DataSet();
		const dv = ds.createView().source(data);

		dv.transform({
			type: 'fold',
			fields: [ 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.' ],
			// 展开字段集
			key: '月份',
			// key字段
			value: '月均降雨量'
			// value字段
		});

		return (
			<div>
				<Chart autoFit height={400} data={dv} forceFit>
					<Axis name="月份" />
					<Axis name="月均降雨量" />
					<Legend />
					<Tooltip
						crosshairs={{
							type: 'y'
						}}
					/>
					<Geom
						type="interval"
						position="月份*月均降雨量"
						color={'name'}
						adjust={[
							{
								type: 'dodge',
								marginRatio: 1 / 32
							}
						]}
					/>
				</Chart>
			</div>
		);
	}
}

