# Solid profile ontology

The ontology for Solid profile.

## Expose manifest to extension

In order to letting the Solid app browser extension know that you're app is compatible with it, you must link to 
a manifest resource that describes your app. To do that, add the following link tag:

```html
<link rel="solid-app-manifest" href="manifest.ttl#solid-app">
```

For users with the browser extension installed, this will prompt a popup that allows them to install the app into the
extension (or ignore it altogether).