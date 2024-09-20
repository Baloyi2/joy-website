// Function to enlarge the image when clicked
const clickableImage = document.getElementById('clickable-image');
const enlargedImage = document.getElementById('enlarged-image');
const overlay = document.getElementById('overlay');

clickableImage.onclick = function() {
    enlargedImage.src = this.src; // Set the source of the enlarged image
    enlargedImage.style.display = 'block'; // Show the enlarged image
    overlay.style.display = 'block'; // Show the overlay
};

// Function to close the enlarged image
function closeImage() {
    enlargedImage.style.display = 'none'; // Hide the enlarged image
    overlay.style.display = 'none'; // Hide the overlay
}
