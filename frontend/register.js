// register.js

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),
        });

        if (response.ok) {
            alert('Registration successful! You can now log in.');
            window.location.href = '../index.html';
        } else {
            const errorData = await response.json();
            alert(`Registration failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed, please try again later.');
    }
});
