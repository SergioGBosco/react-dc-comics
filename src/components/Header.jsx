const Header = () => {
  // creo 'array di oggetti per la navbar cosi da ciclarli e insierirli in automatico
  const menu = [
    {
      id: 1,
      label: "Characters",
      href: "#",
    },
    {
      id: 2,
      label: "Comics",
      href: "#",
    },
    {
      id: 3,
      label: "Movies",
      href: "#",
    },
    {
      id: 4,
      label: "Tv",
      href: "#",
    },
    {
      id: 5,
      label: "Games",
      href: "#",
    },
    {
      id: 6,
      label: "Collectibles",
      href: "#",
    },
    {
      id: 7,
      label: "Videos",
      href: "#",
    },
    {
      id: 8,
      label: "Fans",
      href: "#",
    },
    {
      id: 9,
      label: "News",
      href: "#",
    },
    {
      id: 10,
      label: "Shop",
      href: "#",
    },

  ]
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-20">
            <div className="logo">
              <img src="../../img/dc-logo.png" alt="" />
            </div>
          </div>
          <div className="col-80">
            <ul id="menu">
              {menu.map(link => {
                return (
                  <li key={link.id}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
