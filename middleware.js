import { NextResponse } from "next/server"

// it's typically meant
// to take a look at some incoming request,
// maybe change it a bit, maybe block it,
// for example, to implement authentication
// and maybe redirect to another page
// if a user is not authenticated, for example,
// which you could do with help of the built-in redirect method
// on this next response.

export function middleware(request) {
	// But you often also just might want to let the request go on to its original destination,
	// maybe after evaluating or changing it.

	return NextResponse.next()
	return NextResponse.redirect()
}

export const config = {
	// would allow you to filter the kind of requests that trigger the middleware.
	matcher: "/news",
}

// IN GENERAL this middleware feature is a feature you can use

// to handle different requests differently,

// to inspect all kinds of requests

// and potentially to also redirect requests

// depending on what you need to do in your application.
