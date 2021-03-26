import { Grid } from "@material-ui/core";
import React from "react";
import "./hopepage.css";

const Home = () => {
	return (
		<body>
			<section class="banner">
				<Grid container>
					<Grid item xs={12} md={4}>
						<div></div>
					</Grid>
					<Grid item xs={12} md={8}>
						<div>
							<img
								style={{
									marginRight: "0",
									marginLeft: "auto",
									display: "block",
									maxWidth: "50rem",
									maxHeight: "50rem",
								}}
								src="img/img-4.png"
								alt="main-image"
							/>
						</div>
					</Grid>
				</Grid>
			</section>
		</body>
	);
};

export default Home;
