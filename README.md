# Remotion

The TypeScript Remotion starter lives in `video/`.

```sh
cd video
npm ci
npm run dev -- --no-open
```

Edit `video/src/Composition.tsx` to change the `MyComp` composition.
Run `npm run lint` for ESLint and TypeScript checks, and `npm run build` to bundle.
Use `npx remotion render src/index.ts MyComp out/video.mp4` to export a video.
