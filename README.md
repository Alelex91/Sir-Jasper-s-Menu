<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Bz2cV_yWRrrivEV1uAjZn4FzZZ2E4bjU

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Logo (Sir Jasper’s)

Il progetto è già predisposto per mostrare il logo in alto a sinistra.

- Metti il tuo file logo nella cartella **public** e chiamalo **logo.png**:
  - `public/logo.png`
- Se vuoi usare un nome diverso (es. `logo.svg`), aggiorna il percorso in `components/Header.tsx`.

> Nota: se `logo.png` non viene trovato, l'app usa automaticamente un logo di fallback.
