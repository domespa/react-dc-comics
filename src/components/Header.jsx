import headerMenus from "../data/headerMenus";

export default function Header() {
  return (
    <header className="container">
      <img src="img/dc-logo.png" alt="Logo DC" />
      <div className="nav-header">
        <ul>
          {headerMenus.map((headerNav) => {
            return (
              <li key={headerNav.id}>
                <a href={headerNav.url}>{headerNav.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
