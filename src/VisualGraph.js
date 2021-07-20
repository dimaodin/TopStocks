import React from 'react';
import { Grid, Typography, Paper, Link } from '@material-ui/core';
import { Chart } from 'react-charts';
import { useTheme } from '@material-ui/core/styles';

export default function VisualGraph(props) {
	const { dailyQuoteValues, dailyQuoteDates, metaData } = props;

	const theme = useTheme();
	const palle = theme.palette[metaData['2. Symbol']];

	let newArr = [];

	for (let i = 10; i >= 0; i--) {
		const dataPoint = {
			primary: dailyQuoteDates[i],
			secondary: dailyQuoteValues[i]['4. close'],
		};
		newArr.push(dataPoint);
	}

	const data = React.useMemo(
		() => [
			{
				label: 'Daily Closing Price',
				data: newArr,
			},
		],
		[dailyQuoteValues]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: 'ordinal', position: 'bottom' },
			{ type: 'linear', position: 'left', format: (d) => `$${d}` },
		],
		[]
	);

	const getSeriesStyle = React.useCallback(
		() => ({
			color: palle.primary,
			transition: 'all 1s ease',
		}),
		[dailyQuoteValues]
	);

	const getDatumStyle = React.useCallback(
		() => ({
			transition: 'all 1s ease',
		}),
		[dailyQuoteValues]
	);

	return (
		<Grid container justify='center'>

			<Grid item xs={12} style={{ padding: '20px', paddingTop: '30px' }}>
				<Paper
					elevation={3}
					style={{
						backgroundColor: 'transparent',
						padding: '30px',
						paddingBottom: '50px',
						borderRadius: '25px',
						marginTop: '3rem',
					}}>
					<div
						style={{
							width: '100%',
							height: '300px',
							paddingTop: '10px',
						}}>
						<Chart
							data={data}
							axes={axes}
							getSeriesStyle={getSeriesStyle}
							getDatumStyle={getDatumStyle}
							dark={metaData['2. Symbol'] === 'NFLX' ? true : false}
						/>
					</div>
				</Paper>
			</Grid>

			<Typography variant='h9' color='primary'
			style={{
				marginTop: '3.5rem',
				marginBottom: '0.5rem',
				width: '100%',
				fontWeight: '500',
				fontSize: '2.5rem',
				textShadow: '#3d6cb9 1px 3px 5px',
				}}>
					<Link href="https://github.com/dimaodin/TopStocks" target="_blank" rel="noopener">
					It's Open Source!
					</Link>
			</Typography>

			
			<Typography variant='h9' color='primary'
			style={{
				marginTop: '3.5rem',
				marginBottom: '0.5rem',
				width: '100%',
				fontWeight: '400',
				fontSize: '1rem'
				}}>
					<Link href="https://dimaodin.com" target="_blank" rel="noopener">
					Made with ❤️ by Dima Odintsov
					</Link>
			</Typography>

			<Grid item xs={12}></Grid>
		</Grid>
	);
	// return null
}

//   "Time Series (Daily)": {
//         "2020-12-02": {
//             "1. open": "122.02",
//             "2. high": "123.37",
//             "3. low": "120.89",
//             "4. close": "123.08",
//             "5. adjusted close": "123.08",
//             "6. volume": "80009849",
//             "7. dividend amount": "0.0000",
//             "8. split coefficient": "1.0"
//         },
//         "2020-12-01": {
//             "1. open": "121.01",
//             "2. high": "123.4693",
//             "3. low": "120.01",
//             "4. close": "122.72",
//             "5. adjusted close": "122.72",
//             "6. volume": "125920963",
//             "7. dividend amount": "0.0000",
//             "8. split coefficient": "1.0"
//         },
