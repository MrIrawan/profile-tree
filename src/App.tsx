import ContentWrapper from "./components/ContentWrapper/ContentWrapper"

function App() {

  return (
    <>
      <ContentWrapper>
        <section>
          <div className="container w-full bg-blue-500">
            <div className="w-full h-[250px]">
              <img src="background-mozaic.jpg" alt="" className="w-full h-full object-cover"/>
              
            </div>
          </div>
        </section>
      </ContentWrapper>
    </>
  )
}

export default App
