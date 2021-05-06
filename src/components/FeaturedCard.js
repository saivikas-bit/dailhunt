import { Button, Grid, Typography, Box } from '@material-ui/core';
import { Timer } from '@material-ui/icons';
import React from 'react';

function FeaturedCard(props) {
	return (
		<div style={{ width: '90%' }}>
			<Grid container spacing={2}>
				<Grid item lg={12}>
					<img
						src={props.image}
						alt=""
						style={{ borderRadius: '8px', height: '100%', width: '100%' }}
					/>
				</Grid>
				<Grid
					item
					container
					justify="space-between"
					lg={12}
					direction="row"
					wrap="nowrap"
				>
					<Grid item lg={8}>
						{props.title}
					</Grid>
					<Grid
						item
						container
						lg={4}
						justify="flex-end"
						direction="column"
						alignItems="flex-end"
						spacing={1}
					>
						<Grid item>
							<Button
								size="small"
								variant="text"
								style={{
									backgroundColor: '#503E9D',
									color: '#fff',
									opacity: '0.6',
									padding: 0,
								}}
							>
								bbc
							</Button>
						</Grid>
						<Grid item lg={12}>
							<Box display="flex" alignItems="center">
								<Timer fontSize="small" />
								<Typography variant="caption" style={{ marginLeft: '5px' }}>
									6.5pm
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default FeaturedCard;
