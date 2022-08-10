import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import Stack from '@mui/material/Stack'
import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';
import Link from "next/link"

import LanguageMenu from './LanguageMenu'
import FontSize from './FontSize'
import Theme from './Theme'
import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const MenuBar = () => {
	const { data } = React.useContext(DataContext) as DataContextType;
	const currentTheme = data.currentTheme;

	const prevChallenge = async () => {
		console.log("prevChallenge")
	}

	const nextChallenge = async () => {
		console.log("nextChallenge")
	}

	return (
		<AppBar position="static">
			<Toolbar style={{ minHeight: '55px' }}>
				<Stack spacing={2} direction="row">
					<Tooltip TransitionComponent={Zoom} title="Home" arrow>
						<Button size="large">
							<Link href="/">
								<a style={{ color: currentTheme.color, textDecoration: "none" }}>Challenges</a>
							</Link>
						</Button>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Select Challenge" arrow>
						<Button
							size="large"
							startIcon={<FormatListBulletedIcon />}
						>
							<Link href="/challenges">
								<a style={{ color: currentTheme.color, textDecoration: "none" }}>Challenge List</a>
							</Link>

						</Button>
					</Tooltip>

					<Tooltip TransitionComponent={Zoom} title="Previous Challenge" arrow>
						<Button size="small" onClick={prevChallenge}><ArrowBackIcon /></Button>
					</Tooltip>

				</Stack>

				<Stack spacing={2} direction="row" sx={{ position: "absolute", right: "20px" }}>
					<Tooltip TransitionComponent={Zoom} title="Next Challenge" arrow>
						<Button size="small" onClick={nextChallenge}><ArrowForwardIcon /></Button>
					</Tooltip>
					<Theme />
					<LanguageMenu />
					<FontSize />
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default MenuBar;

