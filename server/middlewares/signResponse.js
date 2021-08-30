const signResponse = (req, res, next) => {
  const oldSend = res.send;
  res.send = function (data) {
    let jsonResponse = JSON.parse(data);
    jsonResponse.author = { name: 'Fabian', lastname: 'Orrego' };
    arguments[0] = JSON.stringify(jsonResponse);
    oldSend.apply(res, arguments);
  }
  next();
}

export default signResponse;