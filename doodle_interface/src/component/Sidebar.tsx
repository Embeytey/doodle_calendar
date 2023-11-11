const sendDateToBackend = async (date) => {
  try {
    const response = await fetch("https://your-backend-api.com/saveDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedDate: date }),
    });

    if (response.ok) {
      console.log("Date sent to the backend successfully.");
    } else {
      console.error("Failed to send the date to the backend.");
    }
  } catch (error) {
    console.error("An error occurred while sending the date:", error);
  }
};
