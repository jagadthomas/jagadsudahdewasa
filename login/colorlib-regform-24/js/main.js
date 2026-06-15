$(function(){
	$.validate({
        modules : 'security'
    });
})

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Ambil data user yang sudah ada
  let users = JSON.parse(localStorage.getItem('users') || '[]');

  // Cek apakah username sudah dipakai
  const sudahAda = users.find(u => u.username === username);
  if (sudahAda) {
    alert('Username sudah dipakai!');
    return;
  }

  // Simpan user baru
  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registrasi berhasil! Silakan login.');
  window.location.href = '../index.html'; // redirect ke login
});
