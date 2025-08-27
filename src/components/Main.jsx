import ComicsList from "./ComicsList"
const Main = () => {
  return (
    <main>
      <div className="currentseries">
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-100 relative">
              <div className="button">CURRENT SIRIES</div>
              <ComicsList />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
