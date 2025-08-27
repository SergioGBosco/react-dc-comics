import ComicsList from "./ComicsList"
const Main = () => {
  return (
    <main>
      <div className="currentseries">
        <div className="button">CURRENT SIRIES
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-100">
              <ComicsList />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
