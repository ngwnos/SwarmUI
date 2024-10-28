class ScratchpadTab {
    constructor() {
        this.container = getRequiredElementById('scratchpad_content');
        this.textarea = getRequiredElementById('scratchpad_textarea');
        this.init();
    }

    init() {
        // Load saved content from localStorage
        const savedContent = localStorage.getItem('scratchpad_content');
        if (savedContent) {
            this.textarea.value = savedContent;
        }

        // Save content when it changes
        this.textarea.addEventListener('input', () => {
            localStorage.setItem('scratchpad_content', this.textarea.value);
        });
    }
}

// Initialize the tab when the page loads
let scratchpadTab;
document.addEventListener('DOMContentLoaded', () => {
    scratchpadTab = new ScratchpadTab();
});