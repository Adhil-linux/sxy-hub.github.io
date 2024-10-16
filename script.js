// Example of basic interactivity
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to SXY");

    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const videoTitle = document.getElementById('videoTitle').value;
        const videoFile = document.getElementById('videoFile').files[0];

        // Placeholder for upload logic
        if (videoTitle && videoFile) {
            alert(`Video "${videoTitle}" uploaded successfully!`);
            uploadForm.reset(); // Clear the form
        } else {
            alert("Please fill in all fields.");
        }
    });
});
