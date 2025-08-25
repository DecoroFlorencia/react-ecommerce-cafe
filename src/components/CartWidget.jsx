function CartWidget() {
  return (
    <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>
      🛒
      <span style={{ backgroundColor: "red", borderRadius: "50%", padding: "0.2rem 0.5rem", fontSize: "0.8rem" }}>3</span>
    </div>
  )
}

export default CartWidget