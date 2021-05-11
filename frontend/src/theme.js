import { createMuiTheme } from "@material-ui/core/styles";
export const MUItheme = createMuiTheme({
	palette: {
		primary: {
			main: "#045de9",
		},
		secondary: {
			main: "#15db95",
		},
		text: {
			secondary: "#0000008a",
		},
		// divider: "#0000001f"
		divider: "red"
	},
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
		body1: {
			fontFamily: ["Poppins", "sans-serif"].join(","),
		},
	},
});
