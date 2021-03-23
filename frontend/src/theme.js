import { createMuiTheme } from "@material-ui/core/styles";
export const MUItheme = createMuiTheme({
	palette: {
		primary: {
			main: "#131e53",
		},
		secondary: {
			main: "#00cccc",
		},
	},
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
		body1: {
			fontFamily: ["Poppins", "sans-serif"].join(","),
		},
	},
});
