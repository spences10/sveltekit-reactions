export let GET = async ({ request, url }) => {
	console.log('=====================')
	console.log(request)
	console.log('=====================')
	console.log(url)
	console.log('=====================')
	return new Response('GET', {
		headers: {
			'content-type': 'text/html;charset=UTF-8',
		},
	})
}
