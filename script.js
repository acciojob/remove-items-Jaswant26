//your JS code here. If required.
    document.addEventListener("DOMContentLoaded", function () {
        const colorSelect = document.getElementById("colorSelect");
        const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');

        removeButton.addEventListener("click", function () {
            // Get the selected option
            const selectedOption = colorSelect.options[colorSelect.selectedIndex];
            
            // Check if an option is selected
            if (selectedOption) {
                // Remove the selected option
                colorSelect.remove(selectedOption.index);
            }
        });
    });

