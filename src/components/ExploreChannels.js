import React from 'react';
import Channels from './Channels';
import { Channel } from './models/Channels';
import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { ArrowRight, ChevronRight } from '@material-ui/icons';
function ExploreChannels() {
	const channels = [
		new Channel('abc channel', '/channels/abc.png'),
		new Channel('aljajera', '/channels/aljajera.png'),
		new Channel('bbc Channel', '/channels/bbc.png'),
		new Channel('cnn channel', '/channels/cnn.png'),
		new Channel('cw6 channel', '/channels/cw6.png'),
		new Channel('foxnews', '/channels/foxnews.png'),
	];
	return (
		<>
			<Box
				display="flex"
				alignContent="center"
				justifyContent="space-between"
				marginBottom="1rem"
			>
				<Typography variant="h6" style={{ fontWeight: 'bold' }}>
					Explore Channels
				</Typography>
				<div>
					<Typography
						variant="p"
						color="primary"
						style={{
							// textTransform: 'capitalize',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						see all
						<IconButton style={{ padding: 0 }}>
							<ChevronRight color="primary" fontSize="small" />
						</IconButton>
					</Typography>
				</div>
			</Box>
			<Grid container>
				{channels.map((channel, key) => (
					<Grid item xs={2} key={key}>
						<Channels title={channel.name} image={channel.image}></Channels>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default ExploreChannels;
