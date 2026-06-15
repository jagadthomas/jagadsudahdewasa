document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ambil data user dari localStorage
  let users = JSON.parse(localStorage.getItem('users') || '[]');

  // Cek apakah user terdaftar
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', username);
    localStorage.setItem('username', username);
    window.location.href = '../index.html';
} else {
    alert('Username/password salah, atau belum registrasi!');
}
    window.location.href = '../index.html';
  } else {
    alert('Username/password salah, atau belum registrasi!');
  }
});
