React fundamentals
==================
https://app.pluralsight.com/library/courses/react-18-fundamentals
https://github.com/aivars-playground/react-fundamentals
https://github.com/RolandGuijt/react-fundamentals

```shell
npm run dev
```

adding image
------------
* either reference directly (from public folder)  
or 
* import in javascript `import logo from "../assets/GloboLogo.png"` 
when importing, the resource is managed (i.e. can ve compressewd, and an etag is added)

styling
-------
[index.html](index.html)* index
load from cdn `href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"`  
add overrides from `public/globals.css` as `<link rel="stylesheet" href="/globals.css" />`  

note!!!  
public folder is not automatically reloaded in dev mode.. move customized css to sources `/src`
[App.css](src/App.css)  and `import "./App.css"` in [App.jsx](src/App.jsx)


