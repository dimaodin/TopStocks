import React from 'react';
import { AppBar, Grid, makeStyles, IconButton, Typography } from '@material-ui/core';
import fbIcon from './icons/facebook.svg';
import appleIcon from './icons/apple.svg';
import amazonIcon from './icons/amazon.svg';
import netflixIcon from './icons/netflix.svg';
import googleIcon from './icons/google.svg';

const useStyles = makeStyles({
	headerIcon: { width: '50px' },
});

export default function Header(props) {
	const { setCurSelect } = props;
	const classes = useStyles();

	return (
		<AppBar position='static' style={{ backgroundColor: '#ffffff' }}>

			<Typography variant='h9' color='primary'
			style={{
				position: 'relative',
				marginTop: '1rem',
				marginBottom: '1rem',
				fontWeight: '500',
				letterSpacing: '0.1rem',
				textShadow: '#3d6cb9 1px 2px 2px',
				fontSize: '2rem',
				height: '100%',
				weight: '100%',
				}}>
					Top Stocks 📊
			</Typography>

			<Typography variant='h9' color='primary'
			style={{
				position: 'relative',
				marginTop: '0.1rem',
				marginBottom: '1rem',
				paddingBottom: '1.5rem',
				boxShadow: '10px 5px 5px #f0f0f0',
				fontWeight: '600',
				fontSize: '1rem',
				}}>
					Check the prices of the top 5 stonks (stocks) in the market.
			</Typography>

			<Grid container justify='space-evenly' alignItems='center'>
				<Grid item xs={1}>
					<IconButton
						onClick={() => {
							setCurSelect('FB');
						}}>
						<img className={classes.headerIcon} src={fbIcon} alt='fb' />
					</IconButton>
				</Grid>

				<Grid item xs={1}>
					<IconButton
						onClick={() => {
							setCurSelect('AAPL');
						}}>
						<img className={classes.headerIcon} src={appleIcon} alt='apple' />
					</IconButton>
				</Grid>

				<Grid item xs={1}>
					<IconButton
						onClick={() => {
							setCurSelect('AMZN');
						}}>
						<img className={classes.headerIcon} src={amazonIcon} alt='fb' />
					</IconButton>
				</Grid>

				<Grid item xs={1}>
					<IconButton
						onClick={() => {
							setCurSelect('NFLX');
						}}>
						<img className={classes.headerIcon} src={netflixIcon} alt='fb' />
					</IconButton>
				</Grid>

				<Grid item xs={1}>
					<IconButton
						onClick={() => {
							setCurSelect('GOOGL');
						}}>
						<img className={classes.headerIcon} src={googleIcon} alt='fb' />
					</IconButton>
				</Grid>
			</Grid>
		</AppBar>
	);
}
