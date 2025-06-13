https://github.com/pkellner/pluralsight-what-is-react


fragment
-
use `<></>` to return collection of items (or `<Fragment></Fragment>`)
https://react.dev/reference/react/Fragment

destructured variable
-
```
const ints = [1,2,3]
...
<ListItems ints={ints} />
...
function ListItems({ints})       const ints is passed to function as destructured variable
```

state
-
reactivity... memory
https://react.dev/learn/state-a-components-memory
```
import {useState} from "react";
const [ints,setInts] = useState([1,2,3])
```

closure
-
function with an access to a variable
https://dev.to/mattdclarke/what-is-a-closure-example-use-cases-in-javascript-and-react-2e6j
```
 const increment = 3
 <button onClick={() => addValue(increment)}>Add Item</button>
```

shadowing
--------
ListItems ints overwrites parent Home.ints and ide does not see that it is an array of ints
```
function Home
   const [ints,setInts] = useState([1,2,3])
   <ListItems ints={ints} addValue={addValue}/>


function ListItems({ints, addValue})   
   map ints...                  
```
