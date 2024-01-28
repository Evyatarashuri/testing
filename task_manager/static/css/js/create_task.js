// task_manager/static/js/create_task.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before executing the script

    // Get the form element
    var createTaskForm = document.getElementById('create-task-form');

    if (createTaskForm) {
        // Attach a submit event listener to the form
        createTaskForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // You can perform any client-side validation here before submitting the form
            // For simplicity, we'll just log a message to the console
            console.log("Form submitted!");

            // Optionally, you can submit the form using AJAX
            // Example using Fetch API (replace with your actual endpoint)
            // fetch('/api/create-task/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         title: document.getElementById('id_title').value,
            //         description: document.getElementById('id_description').value,
            //         due_date: document.getElementById('id_due_date').value,
            //         status: document.getElementById('id_status').value,
            //     }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            // });
        });
    }
});
