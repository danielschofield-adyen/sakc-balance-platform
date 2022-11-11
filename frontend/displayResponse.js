async function displayResponse(response) {
  try {
    window.alert(JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
}