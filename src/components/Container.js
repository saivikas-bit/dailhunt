import React from 'react';
import ExploreChannels from './ExploreChannels';
import FeaturedNews from './FeaturedNews';
import TodayHeadlines from './TodayHeadlines';

function Container() {
	return (
		<div style={{ flex: 1, padding: '6rem 1.5rem', paddingBottom: '2rem' }}>
			<ExploreChannels />
			<TodayHeadlines />
			<FeaturedNews />
		</div>
	);
}

export default Container;
