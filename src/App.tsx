//TANSTACK ROUTER
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from "./routeTree.gen.ts" //Import the generated route tree
//STYLES
import './App.css'

//Create a router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
