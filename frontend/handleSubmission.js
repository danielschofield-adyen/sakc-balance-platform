async function handleSubmission(url, state) {
  try {
    const res = await callServer(url, state);
    handleServerResponse(res);
  } catch (error) {
    console.error(error);
  }
}