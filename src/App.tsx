import ContentWrapper from "./components/ContentWrapper/ContentWrapper"
import ProfileHeader from "./components/ProfileHeader/ProfileHeader"
function App() {

  return (
    <>
      <ContentWrapper>
        <ProfileHeader />
        <section>
          <div className="container w-full">
            <div className="">
              <h2 className="text-3xl leading-relaxed font-semibold text-blue-500">Farrel Irawan</h2>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
          </div>
        </section>
      </ContentWrapper>
    </>
  )
}

export default App
