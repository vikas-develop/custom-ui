# Custom UI Library - Demo App

This is the demo application for the Custom UI Component Library.

## Local Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

This demo app is configured for Netlify deployment. The `netlify.toml` file contains the build configuration.

### Deploy to Netlify

1. Push this repository to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - Base directory: `demo`
   - Build command: `npm install && USE_LOCAL=false npm run build`
   - Publish directory: `demo/dist`
6. Click "Deploy site"

Or use Netlify CLI:
```bash
npm install -g netlify-cli
cd demo
netlify deploy --prod
```
