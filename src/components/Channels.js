import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function Channels(props) {
	return (
		<Card style={{ width: '50%', padding: '1.5rem' }}>
			<CardMedia
				image={props.image}
				style={{ height: '3rem', backgroundSize: 'contain' }}
			/>
			<CardContent style={{ padding: 0, paddingTop: '1.8rem' }}>
				<Typography
					style={{ textTransform: 'uppercase' }}
					variant="subtitle2"
					align="center"
					noWrap={true}
				>
					{props.title}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Channels;
