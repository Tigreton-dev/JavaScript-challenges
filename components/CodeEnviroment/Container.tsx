import * as React from 'react'
import { Split } from '@geoffcox/react-splitter'
import Paper from '@mui/material/Paper'

import TabPanel from './TabPanel'
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const Container = () => {
	const { data } = React.useContext(DataContext) as DataContextType;
	const isFullScreen = data.isFullScreen;
	const currentTheme = data.currentTheme;

	const colors = {
		color: currentTheme.tertiary,
		hover: currentTheme.tertiary,
		drag: currentTheme.tertiary,
	}

	const styles = {
		margin: '20px',
		marginTop: '0',
		height: 'calc(100% - 25px)',
		overflow: 'hidden',
		padding: 0,
		position: 'relative',
		boxShadow: currentTheme.borderShadow,
	}

	return (
		<div style={{ width: '100%', height: 'calc(100vh - 55px)', backgroundColor: currentTheme.tertiary }}>
			<Split splitterSize="10px" defaultSplitterColors={colors} initialPrimarySize={isFullScreen ? "0%" : "50%"}>

				<Paper sx={{ ...styles, top: '5px', left: '-5px', marginRight: '0' }}>
					<TabPanel
						isCodeEditor={false}
						firstTitle="Description"
						secondTitle="Solution"
						thirdTitle="Test Cases"
						fourthTitle="Terminal"
					/>
				</Paper>

				<Paper sx={{ ...styles, top: '5px', left: '5px', marginLeft: '0' }}>
					<TabPanel
						isCodeEditor={true}
						firstTitle="Your Solution"
						secondTitle="Submitted Solution"
						thirdTitle="New"
						fourthTitle="Terminal"
					/>
				</Paper>
			</Split>
		</div>
	)
}

export default Container;
