function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname].call(this, response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        return "404 Not Found";
    }
}

exports.route = route;