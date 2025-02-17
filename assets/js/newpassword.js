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

// Form Validation
function checkStuff() {
  var password = document.form1.password;
  var confirmPassword = document.form1.confirm_password;
  var msg = document.getElementById('msg');

  // Reset message
  msg.style.display = 'none';
  msg.innerHTML = "";

  // Password validation
  if (password.value.trim() === "") {
    msg.style.display = 'block';
    msg.innerHTML = "Please enter your password";
    password.focus();
    return false;
  }

  if (password.value.length < 8) {
    msg.style.display = 'block';
    msg.innerHTML = "Password must be at least 8 characters long";
    password.focus();
    return false;
  }

  // Confirm password validation
  if (confirmPassword.value.trim() === "") {
    msg.style.display = 'block';
    msg.innerHTML = "Please confirm your password";
    confirmPassword.focus();
    return false;
  }

  if (password.value !== confirmPassword.value) {
    msg.style.display = 'block';
    msg.innerHTML = "Passwords do not match";
    confirmPassword.focus();
    return false;
  }

  // If all validations pass
  msg.style.display = 'none';
  msg.innerHTML = "";
  return true;
}

// ParticlesJS

// ParticlesJS Config.
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });