const tabsTitle = document.querySelectorAll(".tab-title");

tabsTitle.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const tabsContainer = tab.closest('.tabs-container');
        
        const containerTabsTitle = tabsContainer.querySelectorAll(".tab-title");
        const containerTabsContent = tabsContainer.querySelectorAll(".tab-content");
        
        const targetTab = tab.getAttribute("data-tab");
        
        containerTabsTitle.forEach(title => title.classList.remove("active-title"));
        containerTabsContent.forEach(content => content.classList.remove("active-tab"));
        
        tab.classList.add("active-title");
        containerTabsContent.forEach(content => {
            if(content.getAttribute("data-tab") === targetTab) {
                content.classList.add("active-tab");
            }
        }); 
    });
});