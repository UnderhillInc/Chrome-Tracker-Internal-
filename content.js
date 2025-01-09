// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "monitorForm") {
        const valueToCopy = request.value;
        monitorFormSubmission(valueToCopy, sendResponse);
        return true; // Indicate asynchronous response
    }
});

// Monitor form submission and set the value
function monitorFormSubmission(value, sendResponse) {
    const iframe = document.querySelector('iframe');

    if (!iframe) {
        console.log("Iframe not found");
        sendResponse({ status: "iframe_not_found" });
        return;
    }

    iframe.onload = function () {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const inputField = iframeDocument.querySelector('input[aria-labelledby="i1"]'); // Adjust selector as needed

        if (inputField) {
            inputField.focus();
            inputField.value = value;
            const inputEvent = new Event('input', { bubbles: true });
            inputField.dispatchEvent(inputEvent);

            console.log(`Value "${value}" copied to the input field.`);
        } else {
            console.log("Input field not found.");
        }

        // Start monitoring for form submission
        const observer = new MutationObserver(() => {
            const submitMessage = iframeDocument.querySelector('.freebirdFormviewerViewResponseConfirmationMessage'); // Check for confirmation message

            if (submitMessage) {
                console.log("Form submitted successfully!");
                observer.disconnect();
                sendResponse({ status: "submitted" });
            }
        });

        observer.observe(iframeDocument.body, {
            childList: true,
            subtree: true,
        });
    };
}
