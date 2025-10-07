const productsTabsTitles = document.querySelectorAll(".product-tab-title");
const productsSubTubTitles = document.querySelectorAll(".product-sub-tab-title");
const productsTabTitlesContent = document.querySelectorAll(".active-sub-tab-content");
const productsSubTubContent = document.querySelectorAll(".sub-tab-content");

productsTabsTitles.forEach((tabTitle) =>
    tabTitle.addEventListener("click", () => {
        productsTabsTitles.forEach((tabTitleEl) => tabTitleEl.classList.remove("active-title"));
        productsTabTitlesContent.forEach((tabTitleEl) => tabTitleEl.classList.remove("active"));

        tabTitle.classList.add("active-title");

        productsTabTitlesContent.forEach((tabContent) => {
            if (tabContent.getAttribute("data-tab") === tabTitle.getAttribute("data-tab")) {
                const activeSubTabTitle = tabContent.querySelector(".product-sub-tab-title");

                tabContent.classList.add("active");

                productsSubTubTitles.forEach((tabTitleEl) => tabTitleEl.classList.remove("active-title"));
                productsSubTubContent.forEach((tabTitleEl) => tabTitleEl.classList.remove("active"));

                activeSubTabTitle.classList.add("active-title");

                productsSubTubContent.forEach((tabContent) => {
                    if (tabContent.getAttribute("data-tab") === activeSubTabTitle.getAttribute("data-tab")) {
                        tabContent.classList.add("active");
                    }
                });
            }
        });
    })
);

productsSubTubTitles.forEach((tabTitle) =>
    tabTitle.addEventListener("click", () => {
        productsSubTubTitles.forEach((tabTitleEl) => tabTitleEl.classList.remove("active-title"));
        productsSubTubContent.forEach((tabTitleEl) => tabTitleEl.classList.remove("active"));

        tabTitle.classList.add("active-title");

        productsSubTubContent.forEach((tabContent) => {
            if (tabContent.getAttribute("data-tab") === tabTitle.getAttribute("data-tab")) {
                tabContent.classList.add("active");
            }
        });
    })
);
