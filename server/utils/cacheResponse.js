/**
 * 
 * @param {*} res 
 * @param {*} seconds 
 * Cache util
 */
export const cacheResponse = (res, seconds) => {
  if (process.env.ENV !== 'development') {
    res.set("Cache-Control", `public, max-age=${seconds}`);
  }
}