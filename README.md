# NelsonGPT — Smart Pediatric Assistant

NelsonGPT is a specialized AI chat app for pediatricians. It keeps Zola’s elegant UI but connects to a Mistral-only backend with Clinical and Academic modes. Answers are concise, evidence-based, and cite the Nelson Textbook of Pediatrics when applicable.

## Quick Start

```bash
npm install
cp .env.example .env.local
# Set your Supabase keys and NELSON_API_KEY (Mistral)
npm run dev
```

## Environment

- NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- NELSON_API_KEY (or MISTRAL_API_KEY)
- NEXT_PUBLIC_APP_NAME=NelsonGPT

## Features
- Clinical mode (concise on-the-go guidance)
- Academic mode (structured deep explanations with citations)
- Supabase authentication
- Vercel-ready

## License
Apache License 2.0
