function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email copied to clipboard!');
    });
}