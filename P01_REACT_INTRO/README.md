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
