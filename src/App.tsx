import ContentWrapper from "./components/ContentWrapper/ContentWrapper"
import ProfileHeader from "./components/ProfileHeader/ProfileHeader"
import ProfileBody from "./components/ProfileBody/ProfileBody"

function App() {

  return (
    <>
      <ContentWrapper>
        <ProfileHeader />
        <ProfileBody>
          <div className="flex justify-between items-baseline">
            <ProfileBody.ProfileName />
            <ProfileBody.ProfileMediaSocial />
          </div>
        </ProfileBody>
      </ContentWrapper>
    </>
  )
}

export default App
