document.addEventListener("DOMContentLoaded", function () {
    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function () {
                if (this.value.length > 1) {
                    this.value = this.value[0];
                }
                if (this.value !== '' && i < inputs.length - 1) {
                    inputs[i + 1].focus();
                }
            });

            inputs[i].addEventListener('keydown', function (event) {
                if (event.key === 'Backspace') {
                    this.value = '';
                    if (i > 0) {
                        inputs[i - 1].focus();
                    }
                }
            });
        }
    }

    OTPInput();

    const validateBtn = document.getElementById('validateBtn');
    validateBtn.addEventListener('click', function () {
        let otp = '';
        document.querySelectorAll('#otp > input').forEach(input => otp += input.value);
        alert(`Entered OTP: ${otp}`);
    });

    // Countdown timer for Resend button
    function startCountdown(duration) {
        const countdownElement = document.getElementById('countdown');
        const resendBtn = document.getElementById('resendBtn');
        resendBtn.style.display = 'none';  // Hide the Resend button initially

        let timer = duration;
        const interval = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timer--;

            if (timer < 0) {
                clearInterval(interval);
                countdownElement.textContent = '';
                resendBtn.style.display = 'block';  // Show the Resend button
            }
        }, 1000);
    }

    // Start the countdown when the page loads
    startCountdown(120);

    // Resend OTP functionality when the button is clicked
    const resendBtn = document.getElementById('resendBtn');
    resendBtn.addEventListener('click', function () {
        alert('Resending OTP...');
        resendBtn.style.display = 'none';  // Hide the button immediately
        startCountdown(120);  // Restart the countdown with 2 minutes
    });
});
