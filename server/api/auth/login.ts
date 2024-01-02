export default eventHandler(async (event) => {
    await setUserSession(event, {
        user: {
            name: 'John Doe',
        },
    })
})