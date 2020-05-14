import React from "react";
import {
	/* the components you used */
	Card,
	Box
} from "@material-ui/core";

/**
 * how you used the components
 */
export default function Demo() {
	return (
		<Box clone bgcolor="primary.light">
			<Card>{process.env.NODE_ENV}</Card>
		</Box>
	);
}
