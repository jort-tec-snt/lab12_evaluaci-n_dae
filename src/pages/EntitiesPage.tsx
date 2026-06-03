import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { getQuestions } from "@/api/trivia.api"
import type { TriviaQuestion } from "@/types/trivia"

function decodeText(text: string) {
  const textarea = document.createElement("textarea")
  textarea.innerHTML = text
  return textarea.value
}

function getDifficultyColor(difficulty: string) {
  if (difficulty === "easy") return "text-emerald-400"
  if (difficulty === "medium") return "text-yellow-400"
  return "text-red-400"
}

export function EntitiesPage() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([])

  useEffect(() => {
    getQuestions()
      .then((data) => {
        console.log("Preguntas recibidas:", data)
        setQuestions(data)
      })
      .catch((error) => {
        console.error("Error al consumir la API:", error)
      })
  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <section className="mx-auto max-w-6xl">
        <Button asChild variant="outline">
          <Link to="/">Volver al inicio</Link>
        </Button>

        <header className="mt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Open Trivia DB
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Preguntas de trivia
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Listado obtenido desde una API pública. Cada tarjeta muestra categoría,
            dificultad, tipo de pregunta y opciones de respuesta.
          </p>
        </header>

        <div className="mt-8 grid gap-5">
          {questions.map((item, index) => {
            const answers = [
              item.correct_answer,
              ...item.incorrect_answers,
            ]

            return (
              <article
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl"
              >
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-zinc-300">
                    {decodeText(item.category)}
                  </span>

                  <span
                    className={`rounded-full bg-zinc-800 px-3 py-1 ${getDifficultyColor(
                      item.difficulty
                    )}`}
                  >
                    {item.difficulty}
                  </span>

                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-zinc-300">
                    {item.type}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-semibold leading-relaxed">
                  {index + 1}. {decodeText(item.question)}
                </h2>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {answers.map((answer, answerIndex) => (
                    <button
                      key={answerIndex}
                      className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800"
                    >
                      {decodeText(answer)}
                    </button>
                  ))}
                </div>

                <p className="mt-5 text-sm text-emerald-400">
                  Respuesta correcta: {decodeText(item.correct_answer)}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}