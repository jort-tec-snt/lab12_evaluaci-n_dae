import axios from "axios"

const TRIVIA_API_URL =
  "https://opentdb.com/api.php?amount=10"

export async function getQuestions() {
  const response = await axios.get(TRIVIA_API_URL)

  return response.data.results
}