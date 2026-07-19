import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const username = params.username;

	return json({
		username,
		tier: "LT5",
		owner: false
	});
}
