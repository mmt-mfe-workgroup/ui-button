# UI Button

Shared UI resource for MFE workgroup "Zain's Phones"

CDN_LOCATION: `rude-clouds.surge.sh`
FRAMEWORK: `react@18.2`

## Usage

Update **federated plugin** found in your `vite.config.js` to include

```
remotes: {
    UI: "CDN_LOCATION/assets/remoteEntry.js",
}
```

Import the Component into your React application lazily as follows:

```
const Component = () => import("UI/Button");
```

TBC => how to access the module!
