import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // QUAN TRỌNG: Tên này phải trùng khớp với tên repository trên GitHub của bạn
  // Ví dụ: https://hungnt166-boop.github.io/Dubai_HNKH-2025/ thì base phải là '/Dubai_HNKH-2025/'
  base: '/Dubai_HNKH-2025/',
  build: {
    outDir: 'dist',
  }
})