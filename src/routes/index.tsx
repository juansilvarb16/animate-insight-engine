import { createFileRoute } from "@tanstack/react-router";
import { Hero, Navbar, Pipeline } from "@/components/portfolio/Hero";
import { About, Contact, Education, Experience, Footer, GithubRepos, Projects, Services, Stack } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Ribeiro — Engenharia de Software, Dados & Automação" },
      { name: "description", content: "Portfólio de Juan Ribeiro: estudante de Engenharia de Software na FIAP com foco em dados, automação e back-end (Python, SQL, Databricks)." },
      { property: "og:title", content: "Juan Ribeiro — Dados, Automação & Back-end" },
      { property: "og:description", content: "Projetos, experiência e stack de Juan Ribeiro — Python, SQL, Databricks e JavaScript." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pipeline />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Stack />
      <GithubRepos />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
