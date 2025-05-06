import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import {
  networkAtom,
  jobAtom,
  messagingAtom,
  notificationsAtom
} from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationsAtom)

  return (
    <>
      <button>Home</button>
      <button>
        My network ({networkNotificationCount >= 100 ? '99+' : networkNotificationCount})
      </button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me</button>
    </>
  )
}

export default App
