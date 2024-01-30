function useArgs () {
  const [, , ...params] = process.argv;
  return params;
}

async function trying(promise) {
  try {
    const response = await promise;
    return [response, undefined];
  } catch (error) {
    return [undefined, error];
  }
}

module.exports = { useArgs, trying };