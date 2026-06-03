import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function EntitiesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <section className="mx-auto max-w-5xl">
        <Button asChild variant="outline">
          <Link to="/">Volver al inicio</Link>
        </Button>

        <h1 className="mt-8 text-3xl font-bold">Preguntas de trivia</h1>
        <p className="mt-2 text-zinc-400">
          Aquí se renderizará la respuesta de la API.
        </p>
      </section>
    </main>
  )
}