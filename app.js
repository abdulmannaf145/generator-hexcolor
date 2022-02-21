window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');
    const copy = document.getElementById('copy-btn');

    btn.addEventListener('click', function () {
        const bgColor = generateHaxColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
    copy.addEventListener('click',function () {
        window.navigator.clipboard.writeText(output.value);
    })
}

function generateHaxColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
    
}
