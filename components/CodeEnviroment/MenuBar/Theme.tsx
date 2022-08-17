import * as React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

export default function Theme() {
	const { data, updateData } = React.useContext(DataContext) as DataContextType;
	const currentTheme = data.currentTheme;
	const lightTheme = data.lightTheme;
	const darkTheme = data.darkTheme;
	const boxRef = React.useRef(null);

	React.useEffect(() => {
		if (currentTheme.isDarkTheme) boxRef.current.style.transform = "translateX(47px)";
		if (!currentTheme.isDarkTheme) boxRef.current.style.transform = "translateX(0px)";
	}, [])

	const clickHandler = () => {
		const position = boxRef.current.style.transform;
		if (position === "translateX(47px)") {
			updateData({ currentTheme: lightTheme })
			localStorage.setItem('theme', JSON.stringify(lightTheme));
			boxRef.current.style.transform = "translateX(0px)";
		} else {
			updateData({ currentTheme: darkTheme })
			localStorage.setItem('theme', JSON.stringify(darkTheme));
			boxRef.current.style.transform = "translateX(47px)";
		}
	}

	return (
		<>
			<Tooltip TransitionComponent={Zoom} title="Select Theme" arrow>
				<div
					onClick={() => clickHandler()}
					style={{
						width: "100px",
						height: "40px",
						boxSizing: "border-box",
						borderRadius: "5px",
						backgroundColor: currentTheme.primary,
						padding: "3px",
						cursor: "pointer",
						boxShadow: currentTheme.borderShadow
					}}>
					<div
						ref={boxRef}
						style={{
							width: "47px",
							height: "33px",
							background: currentTheme.tertiary,
							position: "relative",
							transition: "all 0.3s ease",
							borderRadius: "3px",
						}}
					/>
					<div style={{
						width: "94px",
						height: "cover",
						position: "relative",
						top: "-28.5px",
						alignItems: 'center',
						display: 'flex',
						flexWrap: 'wrap',
					}}>
						<LightModeIcon style={{ width: "47px", color: currentTheme.color }} />
						<DarkModeIcon style={{ width: "47px", color: currentTheme.color }} />
					</div>
				</div>
			</Tooltip>
		</>
	)
}
