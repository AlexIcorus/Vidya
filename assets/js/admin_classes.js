$(document).ready(function () {
    // Show the modal on "Add" button click
    $('.btn_add').click(function () {
        $('#formModal').modal('show');
    });

    // Validate the form fields
    function validateForm() {
        let isValid = true;

        // Check if each field is empty
        $('#classForm input').each(function () {
            const field = $(this);
            if (field.val().trim() === '') {
                field.addClass('is-invalid');
                isValid = false;
            } else {
                field.removeClass('is-invalid');
            }
        });

        // Validate price as a number
        const priceField = $('#price');
        if (priceField.val().trim() === '' || isNaN(priceField.val())) {
            priceField.addClass('is-invalid');
            isValid = false;
        } else {
            priceField.removeClass('is-invalid');
        }

        return isValid;
    }

    // Handle Save Button Click
    $('#saveButton').click(function () {
        if (validateForm()) {
            const formData = {
                image: $('#classImage').val(),
                classManagement: $('#classManagement').val(),
                price: $('#price').val(),
                teacherName: $('#teacherName').val(),
                age: $('#age').val(),
                time: $('#time').val(),
                capacity: $('#capacity').val(),
            };

            console.log('Form Data:', formData);
            alert('Form data saved! Check console for details.');

            // Close the modal
            $('#formModal').modal('hide');
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    // Reset form when modal is closed
    function resetForm() {
        $('#classForm')[0].reset();
        $('#classForm input').removeClass('is-invalid');
    }

    // When clicking the close button
    $('.btn-close').click(resetForm);

    // When the modal is fully hidden
    $('#formModal').on('hidden.bs.modal', resetForm);
});
