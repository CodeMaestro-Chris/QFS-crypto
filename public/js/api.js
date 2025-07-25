// api.js
// Handles API integration for login and registration

const API_BASE = 'https://qfstrade.pythonanywhere.com';

// Register user
async function registerUser({ name, email, password, phone }) {
  try {
    const response = await fetch(`${API_BASE}/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        phone_number: phone
      })
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { status: 0, data: { error: error.message } };
  }
}

// Login user
async function loginUser({ email, password }) {
  try {
    const response = await fetch(`${API_BASE}/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        password
      })
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { status: 0, data: { error: error.message } };
  }
}

// Export functions for use in other scripts
window.api = { registerUser, loginUser };
