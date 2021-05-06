import {
	AppBar,
	Box,
	Toolbar,
	Button,
	ButtonGroup,
	TextField,
	InputAdornment,
	Avatar,
	useScrollTrigger,
	Slide,
} from '@material-ui/core';
import {
	Backup,
	DateRange,
	GraphicEq,
	Person,
	PieChart,
	RoomOutlined,
	Search,
	UnfoldMoreOutlined,
} from '@material-ui/icons';
import React from 'react';
import Logo from '../Logo.svg';

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

function Topnav() {
	return (
		<HideOnScroll>
			<AppBar
				elevation={0}
				color="transparent"
				style={{ width: 'calc(100% - 240px)' }}
				position="fixed"
			>
				<Toolbar>
					<Box>
						<ButtonGroup>
							<Button
								variant="text"
								startIcon={<RoomOutlined fontSize="small" />}
								endIcon={<UnfoldMoreOutlined fontSize="small" />}
							>
								san fransisco
							</Button>
							<Button
								variant="text"
								startIcon={<PieChart fontSize="small" />}
								endIcon={<UnfoldMoreOutlined fontSize="small" />}
							>
								Analysis
							</Button>
							<Button
								variant="text"
								startIcon={<DateRange fontSize="small" />}
								endIcon={<UnfoldMoreOutlined fontSize="small" />}
							>
								Date
							</Button>
						</ButtonGroup>
					</Box>
					<Box flex="1"></Box>
					<Box display="flex">
						<TextField
							variant="outlined"
							size="small"
							placeholder="search for anything..."
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
							}}
						/>
						<Button size="medium" color="secondary">
							<Backup />
						</Button>
						<Avatar>
							<Person />
						</Avatar>
					</Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}

export default Topnav;
