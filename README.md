# UI Button

Shared UI resource for MFE workgroup "Zain's Phones"

CDN_LOCATION: `useless-distribution.surge.sh`

FRAMEWORK: `react@18.2`

COMPONENT: `Button`

## Usage

Update **federated plugin** found in your `vite.config.js` to include

```
remotes: {
    UI: "CDN_LOCATION/assets/remoteEntry.js",
}
```

Import the Component into your React application lazily as follows:

```
import React, { lazy, Suspense } from 'react';
// see remote config key and remote file component entry
const Component = lazy(() => import("UI/Button"));

const App = () => {
  const myHandler = () => console.log("Dispatch CustomEvent")
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component label="Click me" onClick={myHandler} />
    </Suspense>
  )
}
```
