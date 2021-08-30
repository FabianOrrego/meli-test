
export const cacheResponse = (res, seconds) => {
    console.log("Env: ", process.env.ENV)
    if(process.env.ENV !== 'development') {
        res.set("Cache-Control", `public, max-age=${seconds}`);
    }
}