import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages用: リポジトリ名に合わせて変更してください
  base: '/portfolio/',
})
