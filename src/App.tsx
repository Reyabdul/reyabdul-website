import React, {useState} from "react";
//COMPONENTS
import { IntroPage } from "./components/general/Intro/IntroPage.tsx";
//TANSTACK ROUTER
// import { RouterProvider, createRouter } from '@tanstack/react-router'
// import { routeTree } from "./routeTree.gen.ts" //Import the generated route tree
//STYLES
import './global.css'

//Create a router instance
// const router = createRouter({ routeTree });

// Register the router instance for type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

function App() {

  const [showIntro, setShowIntro] = useState(true);


  return (
    <>
      <IntroPage showIntro={showIntro} setShowIntro={setShowIntro} />
      {/* <RouterProvider router={router} /> */}
      {!showIntro && (
        <>
          <h1>Home Page</h1>
        </>
      )}
    </>
  )
}

export default App
