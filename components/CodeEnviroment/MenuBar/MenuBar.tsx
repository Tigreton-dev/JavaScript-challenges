import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { useRouter } from "next/router";
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
import UserSettings from './UserSettings'

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const MenuBar = () => {
	const { data } = React.useContext(DataContext) as DataContextType;
	const currentProblem = data.currentProblem;
	const currentTheme = data.currentTheme;
	const router = useRouter()

	const prevChallenge = async () => {
		const refNumber = currentProblem.refNumber - 1;
		const res = await fetch(`/api/put/${refNumber}`);
		const prevChallenge = await res.json();
		router.push("/challenges/" + prevChallenge);
	}

	const nextChallenge = async () => {
		const refNumber = currentProblem.refNumber + 1;
		const res = await fetch(`/api/put/${refNumber}`);
		const prevChallenge = await res.json();
		router.push("/challenges/" + prevChallenge);
	}

	return (
		<AppBar position="static">
			<Toolbar style={{ minHeight: '55px' }}>
				<Stack spacing={2} direction="row">
					<Tooltip TransitionComponent={Zoom} title="Home" arrow>
						<Button size="large">
							<Link href="/">
								<a style={{color: currentTheme.color, textDecoration:"none"}}>Challenges</a>
							</Link>
						</Button>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Select Challenge" arrow>
						<Button
							size="large"
							startIcon={<FormatListBulletedIcon />}
						>
							<Link href="/challenges">
								<a style={{color: currentTheme.color, textDecoration:"none"}}>Challenge List</a>
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
					<UserSettings />
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default MenuBar;

