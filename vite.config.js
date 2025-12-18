import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 ESTA LÍNEA ES LA CLAVE. Debe coincidir con el nombre de tu repositorio.
  base: "/CreaTuLanding-Meolans/",
})