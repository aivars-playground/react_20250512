const http = require('http');

const server = http.createServer(async (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end(`
    
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
          <div id="root" />
        
          <script>
        
            const rootElement = document.getElementById('root')
            const numbers = [1,2,3,4,5]
            const adderIncrement = 3
        
            const generateListHTML = (nrs) => \`
              <ul>
                ${nrs.map((n) => `<li>${n}</li>`).join('')}
              </ul>
            \`
        
            const generateAddButton = () =>
              \`<button id="addButton" type="button">Add New Item</button>\`
        
            rootElement.innerHTML = \`${generateListHTML(numbers)}${generateAddButton()}\`
        
            addItemButtonElement = document.getElementById("addButton")
            const addItem = () => {
                const newValue = numbers[numbers.length - 1] + adderIncrement
                numbers.push(newValue)
                rootElement
                    .querySelector("ul")
                    .insertAdjacentHTML("beforeend", '<li>' + newValue + '</li>')
            }
        
            addItemButtonElement.addEventListener("click", addItem)
        
        
          </script>
        
        </body>
        </html>
    `);
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server started at `http://127.0.0.1:3000`');
})