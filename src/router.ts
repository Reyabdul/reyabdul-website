import { createRouter } from '@tanstack/router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
} 