const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordField = document.getElementById('confirmPassword');

togglePassword.addEventListener('click', function () {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    this.classList.toggle('typcn-eye-active');
    this.classList.toggle('typcn-eye');
    this.classList.toggle('typcn-eye-outline');
});

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    confirmPasswordField.type = type;

    this.classList.toggle('typcn-eye-active');
    this.classList.toggle('typcn-eye');
    this.classList.toggle('typcn-eye-outline');
});
