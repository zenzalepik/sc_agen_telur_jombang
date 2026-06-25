import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, unlinkSync, readdirSync } from 'fs'
import { join, resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inline-js',
      closeBundle() {
        const outDir = resolve('dist')
        const htmlPath = join(outDir, 'index.html')
        let html = readFileSync(htmlPath, 'utf-8')

        html = html
          .replace(/\s+type="module"/g, '')
          .replace(/\s+crossorigin/g, '')

        const match = html.match(/<script[^>]*src="(\.\/assets\/index-[^"]+\.js)"[^>]*><\/script>/)
        if (match) {
          const jsPath = join(outDir, match[1].replace('./', ''))
          const js = readFileSync(jsPath, 'utf-8')
          html = html.replace(match[0], '')
          html = html.replace('</body>', `<script>${js}</script></body>`)
          try { unlinkSync(jsPath) } catch {}
        }

        writeFileSync(htmlPath, html)
      },
    },
  ],
  base: './',
  build: {
    outDir: 'dist',
  },
})
