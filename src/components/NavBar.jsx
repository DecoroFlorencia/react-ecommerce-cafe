import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "#6F4E37", color: "white" }}>
      <h2>Café Aster</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Productos</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar