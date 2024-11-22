import './Navbar.css'
export function Navbar () {
  return (
    <nav class="navbar">
    <div class="navbar-brand">
      <a href="#">MyBrand</a>
    </div>
    <ul class="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="navbar-toggle" id="mobile-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  )
}
