import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Chakra UI
import { Provider } from "@/components/ui/provider";
//Tanstack Query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";



//Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
  )
