// import widget
import { Suspense } from "react"
import Spinner from "./components/spinner"
import Homepage from "./widgets"

// APP JSX Component
function App() {

  // building block
  return (
    <>
     <Suspense fallback={<Spinner/>}>
      <Homepage/>
     </Suspense>
     
    </>
  )
}

export default App
