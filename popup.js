document.addEventListener('DOMContentLoaded', function () {
    const valueToCopy = "123456"; // Replace with your dynamic value
    const formStatusLabel = document.getElementById('form-status-label');

    // Notify the content script to monitor the form and set the value
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "monitorForm", value: valueToCopy },
            function (response) {
                if (response && response.status === "submitted") {
                    formStatusLabel.textContent = "Form Submitted Successfully!";
                    setTimeout(() => window.close(), 2000); // Close the popup after 2 seconds
                } else {
                    formStatusLabel.textContent = "Monitoring form submission...";
                }
            }
        );
    });
});
