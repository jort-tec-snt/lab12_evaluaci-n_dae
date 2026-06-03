import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { getQuestions } from "@/api/trivia.api"
import type { TriviaQuestion } from "@/types/trivia"

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
      <section className="mx-auto max-w-5xl">
        <Button asChild variant="outline">
          <Link to="/">Volver al inicio</Link>
        </Button>

        <h1 className="mt-8 text-3xl font-bold">Preguntas de trivia</h1>
        <p className="mt-2 text-zinc-400">
          Listado obtenido desde la API pública Open Trivia DB.
        </p>

        <div className="mt-8 grid gap-4">
          {questions.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <p className="text-sm text-zinc-400">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.question}</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Dificultad: {item.difficulty}
              </p>
              <p className="mt-2 text-green-400">
                Respuesta correcta: {item.correct_answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}