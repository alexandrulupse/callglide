const matchRoute = (pathname, regExp) => new RegExp(regExp).test(pathname);

export default matchRoute;
