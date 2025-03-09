import ContentWrapper from "./components/ContentWrapper/ContentWrapper"
import ProfileHeader from "./components/ProfileHeader/ProfileHeader"
import MediaSocial from "./components/MediaSocial/MediaSocial"

function App() {

  return (
    <>
      <ContentWrapper>
        <ProfileHeader />
        <section>
          <div className="container w-full flex justify-between items-baseline">
            <div className="">
              <h2 className="text-3xl leading-relaxed font-semibold text-blue-500">Farrel Irawan</h2>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
            <div className="flex gap-3">
              <MediaSocial />
            </div>
          </div>
        </section>
      </ContentWrapper>
    </>
  )
}

export default App
