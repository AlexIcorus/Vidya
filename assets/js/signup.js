$(document).ready(function () { 
    $('#signupForm').on('submit', function (e) {
        e.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

        // รับข้อมูลฟอร์ม
        const formData = $(this).serialize();

        // ตรวจสอบฟอร์มก่อนส่ง
        const requiredFields = ['firstname', 'lastname', 'email', 'phone', 'address', 'Date', 'Month', 'Year', 'password', 'confirm_password'];
        let isValid = true;
        let errorMessage = '';

        // ตรวจสอบว่ามีฟิลด์ที่จำเป็นถูกกรอกครบหรือไม่
        requiredFields.forEach(field => {
            const fieldValue = $(`[name="${field}"]`).val().trim();
            if (fieldValue === '') {
                isValid = false;
                errorMessage = translations.fill_required_fields || 'Please fill out all the required fields.'; // ใช้ข้อความจากแปล
                return false;
            }
        });

        // ตรวจสอบวันเดือนปีเกิด
        if (isValid) {
            const day = parseInt($('[name="Date"]').val().trim(), 10);
            const month = parseInt($('[name="Month"]').val().trim(), 10);
            const year = parseInt($('[name="Year"]').val().trim(), 10);

            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                isValid = false;
                errorMessage = translations.valid_date || 'Please enter a valid date of birth.';
            } else if (month < 1 || month > 12) {
                isValid = false;
                errorMessage = translations.valid_month || 'Please enter a valid month (1-12).';
            } else if (day < 1 || day > 31) {
                isValid = false;
                errorMessage = translations.valid_day || 'Please enter a valid day (1-31).';
            } else if (year < 1900 || year > 2023) {
                isValid = false;
                errorMessage = translations.valid_year || 'Please enter a valid year (1900-2023).';
            }
        }

        // ตรวจสอบรหัสผ่าน
        if (isValid) {
            const password = $('[name="password"]').val().trim();
            if (password.length < 8) {
                isValid = false;
                errorMessage = translations.short_password || 'Password must be at least 8 characters long.';
            }

            const confirmPassword = $('[name="confirm_password"]').val().trim();
            if (password !== confirmPassword) {
                isValid = false;
                errorMessage = translations.password_mismatch || 'Passwords do not match.';
            }
        }

        // หากไม่ผ่านการตรวจสอบ แสดงข้อความผิดพลาด
        if (!isValid) {
            Swal.fire('Warning', errorMessage, 'warning');
            return; // ป้องกันการส่งฟอร์ม
        }

        // หากการตรวจสอบผ่าน ส่งข้อมูลฟอร์มด้วย AJAX
        $.ajax({
            type: 'POST',
            url: '/signup', // ส่งข้อมูลไปที่ /signup ใน db_signup.js
            data: formData,
            success: function (response) {
                if (response.type === 'success') {
                    Swal.fire('Success', response.message, 'success').then(() => {
                        window.location.href = '/login'; // เปลี่ยนเส้นทางไปที่หน้า login
                    });
                } else {
                    Swal.fire('Error', response.message, 'error');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error during AJAX request:', error);
                Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
            }
        });
    });
});
