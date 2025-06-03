import Card from "@/components/Card";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]} /> 
      <h1 className="text-4xl font-bold text-center p-11 ">Recursos Principais</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <Card
          title="Rendrização Hibrida"
          description="SSG, SSR e ISR para otimização de performance e SEO."
          emoji="🚀"
        />
        <Card
          title="Css Utility-First"
          description="Tailwind CSS para Estilização Rápida e consistente."
          emoji="🎨"
        />
        <Card
          title="Typescript Integrado"
          description="Tipagem Estática para um código mais seguro."
          emoji="🔒"
        />
      </div>
    </div>
  )
}
