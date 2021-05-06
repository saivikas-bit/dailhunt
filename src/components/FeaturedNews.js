import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import FeaturedCard from './FeaturedCard';
import { Feature } from './models/Feature';

function FeaturedNews() {
	const features = [
		new Feature({
			title: 'Traveller to pay more than $2k tradue says',
			image: '/featurednews/image 7.png',
		}),
		new Feature({
			title: 'mynmar country ceizes country of control over',
			image: '/featurednews/image 8.png',
		}),
		new Feature({
			title: 'pressure builds for biden to cancel other pipeline',
			image: '/featurednews/image 9.png',
		}),
	];

	return (
		<Box paddingTop="1.5rem" width="100%">
			<Box
				justifyContent="space-between"
				display="flex"
				width="100%"
				alignItems="center"
			>
				<Typography
					variant="h5"
					style={{ fontWeight: 'bold', textTransform: 'capitalize' }}
				>
					Featured news
				</Typography>
				<Box display="flex" alignItems="center">
					<Typography variant="caption" color="primary">
						see all
					</Typography>
					<ChevronRight color="primary" />
				</Box>
			</Box>
			<Grid container spacing={2} style={{ paddingTop: '1rem' }}>
				{features.map((feature, index) => (
					<Grid item lg={4}>
						<FeaturedCard title={feature.title} image={feature.image} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default FeaturedNews;
