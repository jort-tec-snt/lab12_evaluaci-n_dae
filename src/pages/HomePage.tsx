import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <section className="max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h1 className="text-4xl font-bold">Trivia React</h1>
        <p className="mt-4 text-zinc-400">
          Aplicación que consume preguntas desde la API pública Open Trivia DB.
        </p>

        <Button asChild className="mt-6">
          <Link to="/entities">Ver preguntas</Link>
        </Button>
      </section>
    </main>
  )
}