document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command');
    const cursor = document.getElementById('cursor');
    const output = document.getElementById('output');
    const blog = document.getElementById('blog');
    const experience = document.getElementById('experience');

    let inputBuffer = '';

    document.addEventListener('keydown', (e) => {
        if (e.key.length === 1) {
            inputBuffer += e.key;
            commandInput.textContent = `cd ${inputBuffer}`;
        } else if (e.key === 'Backspace') {
            inputBuffer = inputBuffer.slice(0, -1);
            commandInput.textContent = `cd ${inputBuffer}`;
        } else if (e.key === 'Enter') {
            processCommand(inputBuffer);
            inputBuffer = '';
            commandInput.textContent = 'cd ';
        }
    });

    function processCommand(command) {
        output.innerHTML = '';
        blog.classList.add('hidden');
        experience.classList.add('hidden');

        switch (command.toLowerCase()) {
            case 'blog':
                blog.classList.remove('hidden');
                break;
            case 'experience':
                experience.classList.remove('hidden');
                break;
            default:
                output.innerHTML = `Command not found: ${command}`;
        }
    }

    // Cursor blinking effect
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
});
