window.onload = () => {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = 'HELLO SPA:';

    const div_btn = document.createElement('div');
    rootElement.appendChild(div_btn);
    const button = document.createElement('button');
    button.innerHTML = 'Find date';
    button.addEventListener('click', () => {
        button.innerText = new Date().toString();
    })
    div_btn.appendChild(button)

    const div_iis = document.createElement('div');
    rootElement.appendChild(div_iis);

    const ints = [1,2,3]
    ints.forEach((i) => {
        let li = document.createElement('li');
        li.innerHTML = i;
        div_iis.appendChild(li);
    })
};