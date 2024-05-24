// So the idea behind these Route Handlers is simply

// that you can set up API-like routes, which produce data, store data, do whatever you need to do,

// but which essentially are called behind the scenes from some client.

export function GET(request) {
	console.log(request)
	return new Response("Hello!")
	// return Response.json
}
// export function POST(request) {}

// So if you're building a NextJS application

// that should not just render its pages and so on,

// but that should maybe also deliver data

// to some mobile app which sends requests

// to this NextJS application, well,

// you could then build such Route Handlers

// which handle the communication

// with such an external client,
