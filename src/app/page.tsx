import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]} /> 
    </div>
  )
}
