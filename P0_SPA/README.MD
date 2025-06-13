https://github.com/pkellner/pluralsight-what-is-react
https://app.pluralsight.com/library/courses/react-what-is


spa - client side only
---
* all code done on client side only
```
[spa2_dynamic.html](spa2_dynamic.html)
```

spa with server 2
-----------------
* initial part (items 1-5) added on server, and add functionality - client
```shell
cd spa_with_server2
node server.js
```
check page source - server side data
```html
<div id="root"><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul><button id="addItemButton">Add Item</button></div>
```
and client side
```javascript
      const numbers = [1,2,3,4,5]
      const rootElement = document.getElementById("root");
      const addItemButton = document.getElementById("addItemButton");
      const incrementValue = 2;
      const addItem = () => {
        const newNumber = numbers[numbers.length - 1] + incrementValue;
        numbers.push(newNumber); 
        rootElement.querySelector("ul").insertAdjacentHTML
          ("beforeend", `<li>${newNumber}</li>`);
      };
      addItemButton.addEventListener("click", addItem);
```