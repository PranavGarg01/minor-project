import { createMuiTheme } from "@material-ui/core/styles";
export const MUItheme = createMuiTheme({
	palette: {
		primary: {
			main: "#045de9",
		},
		secondary: {
			main: "#15db95",
		},
	},
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
		body1: {
			fontFamily: ["Poppins", "sans-serif"].join(","),
		},
	},
});
