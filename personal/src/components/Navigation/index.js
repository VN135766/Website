function Navigation() {
  return (
    <header>
      <a href="/">
      <h2 >Plants Vs Zombies</h2>
      </a>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" >About </a></li>
            
          <li className="mx-2">
            <a href="#contact" >Contact </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
