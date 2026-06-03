import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center">
        <div className="max-w-2xl">
          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
            API pública + React Router + Axios
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Trivia React
          </h1>

          <p className="mt-4 text-lg text-zinc-400">
            Aplicación desarrollada en React que consume preguntas desde Open Trivia DB
            y renderiza una lista de preguntas con su categoría, dificultad y respuesta correcta.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link to="/entities">Ver preguntas</Link>
            </Button>

            <Button asChild variant="outline">
              <a
                href="https://opentdb.com/api.php?amount=10"
                target="_blank"
              >
                Ver API
              </a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <h2 className="font-semibold">10 preguntas</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Datos obtenidos desde una API pública.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <h2 className="font-semibold">2 rutas</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Navegación entre Home y Entities.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <h2 className="font-semibold">Renderizado</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Se muestran propiedades clave de cada pregunta.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}