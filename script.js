document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    if (!audioPlayer) {
        console.log('Audio player not found');
        return;
    }

    playButton.addEventListener('click', function () {
        console.log('Play button clicked');
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', function () {
        console.log('Pause button clicked');
        audioPlayer.pause();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('guestBookForm');
    const commentBox = document.getElementById('commentBox');
    const commentsSection = document.getElementById('commentsSection');

    // Function to handle adding a comment
    function addComment() {
        const comment = commentBox.value.trim();
        if (comment) {
            const commentParagraph = document.createElement('p');
            commentParagraph.textContent = comment;
            commentsSection.appendChild(commentParagraph);
            commentBox.value = ''; // Clear the comment box after submission
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting in the traditional way
        addComment();
    });

    // Event listener for Enter key in the comment box
    commentBox.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action to avoid newline in textarea
            addComment();
        }
    });
});
