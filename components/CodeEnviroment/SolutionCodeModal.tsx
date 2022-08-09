import * as React from 'react'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import Slide, { SlideProps } from '@mui/material/Slide'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

export interface State extends SnackbarOrigin {
	open: boolean
}

type TransitionProps = Omit<SlideProps, 'direction'>

function TransitionLeft(props: TransitionProps) {
	return <Slide {...props} direction="left" />
}

const SolutionCodeModal = (props) => {
	const { open, setClose, isSolutionCorrect } = props
	const { data, updateData } = React.useContext(DataContext) as DataContextType;

	const currentTheme = data.currentTheme;

	const [transition, setTransition] = React.useState<
		React.ComponentType<TransitionProps> | undefined
	>(undefined)

	React.useEffect(() => {
		if (open) setTransition(() => TransitionLeft)
	}, [open])

	const handleClose = () => {
		setClose()
	}

	const text = {
		title: isSolutionCorrect ? 'Well Done!' : 'Ops!',
		subTitle: isSolutionCorrect
			? `Your result passed all tests! — `
			: `Your result did not pass all tests! — `,
		severity: isSolutionCorrect ? 'success' : 'error',
	}

	return (
		<div>
			<Snackbar
				open={open}
				onClose={handleClose}
				TransitionComponent={transition}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				key={'1'}
				children={
					<Alert
						variant="filled"
						severity={text.severity}
						style={{ fontSize: '16px', textAlign:"left" }}
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={handleClose}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						<AlertTitle style={{ fontSize: '17px' }}>{text.title}</AlertTitle>
						{text.subTitle} <strong>check it out!</strong>
					</Alert>
				}
			/>
		</div>
	)
}

export default SolutionCodeModal;
