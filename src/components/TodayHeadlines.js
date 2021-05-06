import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import React from 'react';
import HeadlineCard from './HeadlineCard';
import { Headline } from './models/Headline';

function TodayHeadlines() {
	const headlines = [
		new Headline({
			title: 'hate speech vs free speech',
			image: '/todaysheadlines/image 1.png',
		}),
		new Headline({
			title: 'Ontario liberal leadership',
			image: '/todaysheadlines/image 2.png',
		}),
		new Headline({
			title: 'victim of scarobrog',
			image: '/todaysheadlines/image 3.png',
		}),
		new Headline({
			title: 'Mother who left her baby',
			image: '/todaysheadlines/image 4.png',
		}),
		new Headline({
			title: 'mother of stefanie rangel',
			image: '/todaysheadlines/image 5.png',
		}),
		new Headline({
			title: 'worldcup popular items',
			image: '/todaysheadlines/image 6.png',
		}),
	];
	return (
		<div style={{ paddingTop: '2rem' }}>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Typography variant="h5" style={{ fontWeight: 'bold' }}>
					Today`s Headlines
				</Typography>
				<Typography variant="p" color="primary">
					see all
					<IconButton style={{ padding: 0 }}>
						<ChevronRight color="primary" />
					</IconButton>
				</Typography>
			</Box>
			<Grid container style={{ paddingTop: '1.5rem' }} spacing={3}>
				{headlines.map((item, key) => (
					<Grid item lg={4} key={key}>
						<HeadlineCard title={item.title} image={item.image} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default TodayHeadlines;
