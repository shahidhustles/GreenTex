import { v4 as uuidv4 } from "uuid";

export async function callChatbotWithQuestion(question) {
  console.log("Sending question to chatbot:", question);

  try {
    const response = await fetch(
      "https://coy123.app.n8n.cloud/webhook/9f6037ed-4ab1-49b0-9590-808a8f8b2ec6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          question: question,
          id: uuidv4(),
        }),
      }
    );

    // Log the response status
    console.log("Response status:", response.status);

    // If response isn't ok, throw error with more details
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server response:", errorText);
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Server response:", data);

    // Check if data has an answer property
    if (data && data.answer) {
      return data.answer;
    } else {
      // If no answer property, return the whole response
      return JSON.stringify(data);
    }
  } catch (error) {
    console.error("Chatbot error details:", error);
    throw new Error("Failed to get response from chatbot");
  }
}
