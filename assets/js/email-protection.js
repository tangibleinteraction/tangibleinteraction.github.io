document.addEventListener('DOMContentLoaded', function() {
    // Get the email element
    const emailElement = document.getElementById('email-display');
    if (!emailElement) return;

    // Get email parts from data attributes
    const username = emailElement.getAttribute('data-user');
    const domain = emailElement.getAttribute('data-domain');
    const tld = emailElement.getAttribute('data-tld');

    // Verify all parts exist
    if (!username || !domain || !tld) {
        console.error('Email parts not properly set in data attributes');
        return;
    }

    // Reconstruct the email address from parts
    const emailAddress = username + '@' + domain + '.' + tld;

    // Create a mailto link
    const mailtoLink = document.createElement('a');
    mailtoLink.href = 'mailto:' + emailAddress;
    mailtoLink.textContent = emailAddress;

    // Add copy functionality
    mailtoLink.addEventListener('click', function(e) {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigator.clipboard.writeText(emailAddress).then(() => {
                const originalText = mailtoLink.textContent;
                mailtoLink.textContent = 'Email copied!';
                setTimeout(() => {
                    mailtoLink.textContent = originalText;
                }, 1500);
            });
        }
    });

    // Add title tooltip for copy instruction
    mailtoLink.title = "Ctrl+Click/Cmd+Click to copy email";

    // Add the link to the page
    emailElement.appendChild(mailtoLink);
});
