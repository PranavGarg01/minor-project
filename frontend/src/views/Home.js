import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import React from "react";
import "./hopepage.css";

const Home = () => {
	return (
		<body style={{ overflow: "hidden" }}>
			<section class="banner">
				<div>
					<p className="text">HealthX</p>
				</div>
			</section>
			<section>
				<div className="banner2"></div>
				<Grid container>
					<Grid item xs={12}>
						<Button
							variant="contained"
							color="primary"
							className="button"
						>
							LOGIN
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="outlined"
							color="primary"
							className="button"
						>
							REGISTER
						</Button>
					</Grid>
				</Grid>
			</section>
		</body>
	);
};

export default Home;
