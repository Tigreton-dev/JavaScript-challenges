import { createTheme } from '@mui/material/styles';

export function muiTheme(props:object) {
    const {
        color,
        primary,
        secondary_color,
        tertiary,
    } = props;

    return createTheme({
		palette: {
			type: 'light',
			primary: {
				main: secondary_color,
			},
			secondary: {
				main: secondary_color,
			},
			tertiary: {
				main: secondary_color,
			},
			background: {
				default: '#aa4848',
			},
		},
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						fontSize: '14px',
						borderRadius: '5px',
						background: primary,
						color: color,
						boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
					},
				},
			},
			MuiFab: {
				styleOverrides: {
					root: {
						borderRadius: '5px',
						background: primary,
						boxShadow: '0 2px 4px rgba(50,50,93,.1)',
						color: color,
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: primary,
						fontFamily: '',
						fontWeight: 400,
						fontSize: '0.875rem',
						lineHeight: 1.43,
						letterSpacing: '0.01071em',
						padding: '5px',
						textAlign: 'center',
						color: color,
						borderRadius: "8px"
					},
				},
			},
			MuiAccordion: {
				styleOverrides: {
					root: {
						marginBottom: '20px',
						backgroundColor: primary,
						textAlign: "left",
						borderRadius: "8px",
						color: color,
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						height: '55px',
						padding: "0",
						backgroundColor: tertiary,
						boxShadow: "none",
						borderRadius: "0"
					},
				},
			},
			MuiTab: {
				styleOverrides: {
					root: {
						color: color,
					}
				}
			}
		},
	})
}