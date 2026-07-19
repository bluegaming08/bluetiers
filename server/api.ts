import express from "express";
import players from "../src/data/players";

const app = express();

app.get("/api/player/:username", (req, res) => {
	const username = req.params.username;

	const player = players.find(
		(p) => p.name.toLowerCase() === username.toLowerCase()
	);

	if (!player) {
		return res.status(404).json({
			error: "Player not found"
		});
	}

	res.json(player);
});

app.listen(3001, () => {
	console.log("API running on port 3001");
});
