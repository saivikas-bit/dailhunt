import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Timer } from '@material-ui/icons';
import React from 'react';

function HeadlineCard(props) {
	return (
		<div style={{ width: '90%' }}>
			<Grid container spacing={2} wrap="nowrap">
				<Grid item>
					<img
						src={props.image}
						alt=""
						style={{ borderRadius: '8px', height: '100%' }}
					/>
				</Grid>
				<Grid
					item
					container
					direction="column"
					justify="space-between"
					spacing={0}
				>
					<Grid item>
						<Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
							{props.title}
						</Typography>
					</Grid>
					<Grid item container alignItems="center" spacing={2}>
						<Grid item>
							<img src="/assets/likeicon.png" alt="" />
							<Typography variant="caption"> 1.8k</Typography>
						</Grid>
						<Grid item>
							<img src="/assets/dislikeicon.png" alt="" />
							<Typography variant="caption"> 1.8k</Typography>
						</Grid>
					</Grid>
					<Grid item container justify="space-between" alignItems="center">
						<Grid item>
							<Button
								variant="text"
								size="small"
								style={{
									backgroundColor: '#6F5DBE',
									padding: 0,
									fontSize: '10px',
									color: 'white',
									opacity: '0.5',
									letterSpacing: '2px',
								}}
							>
								Bbc
							</Button>
						</Grid>
						<Grid item>
							<Box display="flex" alignItems="center">
								<Timer fontSize="small" style={{ marginRight: '5px' }} />
								<Typography variant="caption"> 2.5pm</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default HeadlineCard;
