React fundamentals
==================
https://app.pluralsight.com/library/courses/react-18-fundamentals
https://github.com/aivars-playground/react-fundamentals
https://github.com/RolandGuijt/react-fundamentals

FRONTEND
```shell
npm run dev
```
BACKEND
* install dotnet 9
```shell
cd HousesApi/HousesApi
dotnet run
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

* note!!!  
public folder is not automatically reloaded in dev mode.. move customized css to sources `/src`
[App.css](src/App.css)  and `import "./App.css"` in [App.jsx](src/App.jsx)

* note!!!  
all custom css files are merged together

css modules
-------
css module is applied only to the component
https://github.com/css-modules/css-modules
[Banner_WithProps.jsx](src/components/Banner_WithProps.jsx)
[Banner_WithProps.module.css](src/components/Banner.module.css)
***`import {logo as logoClass} from "./Banner_WithProps.module.css"` import as javascript module



bootstrap grid system
---------------------
https://getbootstrap.com/docs/4.0/layout/grid/


passing parameter
-----------------
when passing a parameter to a const/function, current ESlint config complains
add proptypes definition (React) - this is Vite feature!!!
```
import propTypes from "prop-types"

Banner_WithProps.propTypes = {
    headerText: propTypes.string.isRequired
}
```
!!!WARNING - not liked by react team - use tyoescript instead!!!

hooks
-----
read hooks rules... not conditional???
hooks passed from a parent component / state kept internally

memoizing/memorizing
--------------------
oprimizes rendering  
```shell
const HouseRowMemo = React.memo(HouseRow)
// export default HouseRow
export {HouseRowMemo}
```
use HouseRowMemo instead of HouseRow and check React dev tools plugin...   
`[] Highlight updates when components render.`  
unchanged items are not highlighted  
USE PROFILER TO CHECK BENEFIT!!!  oky shalloiw comnparison!!!
https://react.dev/reference/react/memo


Pure function vs Effect
-----------------------
Pure function cacheable  

use effect - fetch data from backend...
NOTE - run only once, do not call db on a redraw!!!

```
useEffect(
   parameter1 - do something
   parameter2 - if parameter2 changes, then retrigger
)

useEffect( () => {call db}, [])  -no dependedncies - do not retrigger!!!
```

NOTE!!! -  <StrictMode> in main results in two calls
https://react.dev/reference/react/StrictMode
renders twice for testing  


Suspense
--------
shows loading screen if component is not ready
```
        <Suspense fallback={<h3>loading...</h3>}>
            <HouseList/>
        </Suspense>
```


a bit of an issue - new approach
```
const fetchHouses = fetch("https://localhost:4000/house")
    .then(response => response.json())

const HouseList = () => {
    const initialData = use(fetchHouses)
    const [houses, setHouses] = useState(initialData)
```
fetchHouses created outside of function HouseList... no way to reload when reusing component  
put fetchHouses and infinite reload - rerender issue  
https://tanstack.com/query/latest
cache promises... 

Reference hook
-------------
`const rerenderCounter = useRef(0)` persisted across renders - like a class variable

vonditionals
------------
{price && - creates a td only if price is truthy - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all
```jsx
            {price &&
                <td className={`${price >= 500000 ? "text-primary" : ""}`}>
                    {currencyFormatter.format(price)}
                </td>
            }
```

passing a parameter to a component
----------------------------------
```jsx
//Using props ap[ttern - props a variable name
const Component = (props) => {
    props.aaa
    props.bbb
}

<Component aaa=1 bbb=2 />
```

```jsx
//Using destructor - props a variable name
const Component = ({aaa,bbb}) => {
    props.aaa
    props.bbb
}

<Component aaa=1 bbb=2 />
```

Note....  eslint-disable-next-line react/prop-types requires adding
```
Component.propTypes = {
    address: propTypes.string.isRequired,
    country: propTypes.string,
    price: propTypes.numeric,
}

for 
  const HouseRow = (house) =>
   or
  const HouseRow = ({address, country, price}) =>
```

or a shape if both object and destructor is used
```
Component.propTypes = {
    house: propTypes.shape({
        address: propTypes.string,
        country: propTypes.string,
        price: propTypes.numeric,
    })
}

for const HouseRow = ({house: {address, country, price}})   <--- destructor for house
```


calling a destructor on a house object (house is a destructed value, not props!!!) - see curly races
```
  const HouseRow = ({house}) =>
  const {address, country, price} = house
```

