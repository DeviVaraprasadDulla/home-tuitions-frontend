import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

{
  "routes": [
    {
      "src": "^/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "^(?!/assets/).*$",
      "dest": "/index.html"
    }
  ]
}