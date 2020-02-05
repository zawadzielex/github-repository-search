function getTokenData(token) {
  return token
    .split("&")
    .reduce((prev, item) => ({ ...prev, [item.split("=")[0]]: item.split("=")[1] }), {});
}

module.exports = getTokenData;
