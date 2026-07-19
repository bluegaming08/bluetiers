import express from "express";

const app = express();

app.get("/api/player/:username", (req, res) => {
	const username = req.params.username;

	res.json({
		username,
		tier: "LT5",
		owner: false
	});
});

app.listen(3001, () => {
	console.log("API running on port 3001");
});
