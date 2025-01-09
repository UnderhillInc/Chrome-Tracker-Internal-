# Chrome-Tracker-Internal-

- manifest.json       // Configuration for the Chrome extension
- popup.html          // HTML structure of the extension popup
- popup.js            // Logic for popup functionality and communication
- content.js          // Script for interacting with the embedded Google Form

== Overview == <br>
The Google Form Filler Chrome Extension streamlines filling out embedded Google Forms by:

Monitoring form progress and submission status.
Keeping the extension popup open until the form is fully submitted.
Providing real-time feedback on the form submission status.

== Installation == <br>
Clone or download the extension's code to your local machine.
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click Load unpacked and select the folder containing the extension files.
The extension icon will appear in the browser toolbar.

== Usage == <br>
Click the extension icon in your Chrome toolbar to open the popup.
The embedded Google Form will load inside the popup.
The extension will:
Fill out any additional fields as needed, and click Submit on the form.
The popup will display Form Submitted Successfully! and close automatically after 2 seconds.

== How It Works == <br>
Initialization:
The popup opens an embedded Google Form inside an <iframe>.

Update the input field selector (input[aria-labelledby="i1"]) in content.js to match your specific Google Form's field attributes.

== Known Limitations == <br>
Cross-Origin Restrictions:
The extension may not work if the embedded Google Form enforces strict cross-origin policies.
Dynamic Form Changes:
If the Google Form structure changes significantly (e.g., different field attributes), updates to the field selector in content.js may be required.

== Future Enhancements == <br>
Add support for multi-field auto-fill based on user input.
Provide options for users to dynamically configure field values from the popup interface.
Enhance error handling for scenarios where the iframe or form fields cannot be accessed.
