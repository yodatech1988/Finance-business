```javascript
let activeTab = null;

function createTab(id) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.id = `tab-${id}`;
    tab.textContent = `Conversation ${id}`;

    tab.addEventListener('click', () => {
        if (activeTab) {
            activeTab.classList.remove('active');
        }
        tab.classList.add('active');
        activeTab = tab;
    });

    document.getElementById('tabContainer').appendChild(tab);
}

function removeTab(id) {
    const tab = document.getElementById(`tab-${id}`);
    if (tab) {
        tab.remove();
        if (activeTab === tab) {
            activeTab = null;
        }
    }
}
```