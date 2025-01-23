import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
//Chakra UI
import { Provider } from "@/components/ui/provider";
//Tanstack Query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// //Tanstack Router
// import { RouterProvider, createRouter } from '@tanstack/react-router'
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//CSS
import "./index.css";
import App from "./App.tsx";

// //Import the generated route tree
// import { routeTree } from "./routeTree.gen.ts";

// //Create a new router instance
// const router = createRouter({ routeTree });

// //Register the router instance for type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

//Create a client
const queryClient = new QueryClient();

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render( 
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
      {/* <RouterProvider router={router} /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
  )
}
