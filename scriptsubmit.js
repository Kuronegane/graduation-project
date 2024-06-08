document.addEventListener('DOMContentLoaded', function () {
    // Get the emergency button and the popup elements
    const emergencybutton = document.getElementById('emergencybutton');
    const popup = document.querySelector('.popup');
    const emergencymenu = document.getElementById('emergencymenu');

    // Log elements to verify they are selected correctly
    console.log('emergencybutton:', emergencybutton);
    console.log('popup:', popup);

    // Function to show the popup with the emergency menu
    function showpopup(menu) {
        // Hide other menu sections if needed
        // Here, we're only showing the emergency menu, so no need to hide others

        // Show the emergency menu and the popup
        menu.style.display = 'block';
        popup.style.display = 'flex';
    }

    // Add click event listener to the emergency button
    emergencybutton.addEventListener('click', function () {
        console.log('emergency button clicked'); // Log to check click event
        showpopup(emergencymenu);
    });

    // Add click event listener to the close button within the emergency menu
    const closeButton = emergencymenu.querySelector('.close');
    closeButton.addEventListener('click', function () {
        // Make the popup invisible when the close button is clicked
        popup.style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Get the return button element
        const returnButton = document.querySelector('.return');

        // Add click event listener to the return button
        returnButton.addEventListener('click', function () {
            // Redirect to the desired URL
            window.location.href = 'https://example.com'; // Replace 'https://example.com' with the URL you want to redirect to
        });
    });
});