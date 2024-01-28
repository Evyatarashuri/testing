// task_manager/static/js/task_list.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before executing the script

    // Get all the delete buttons on the page
    var deleteButtons = document.querySelectorAll('.delete-button');

    // Attach a click event listener to each delete button
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent the default behavior of the link/button
            event.preventDefault();

            // Confirm the deletion with the user (you can customize this)
            var confirmDelete = confirm("Are you sure you want to delete this task?");

            if (confirmDelete) {
                // Perform your delete action here
                // You might want to make an AJAX request to the server to delete the task
                // For simplicity, we are just logging a message to the console
                console.log("Task deleted!");
                
                // Optionally, you can remove the task from the DOM
                var taskItem = button.closest('.task-item');
                taskItem.remove();
            }
        });
    });
});
