export default eventHandler(async (event) => {
	const body = await readBody(event)

	return await setUserSession(event, {
		user: {
			name: body.name,
		},
	})
})
