// // Инициализация табов после загрузки DOM
// document.addEventListener('DOMContentLoaded', function() {
//     // Элементы табов
//     const mainTabs = document.querySelectorAll('.products__tab-content .tab-title');
//     const subTabsContainers = document.querySelectorAll('.tab-subtab');
//     const subTabs = document.querySelectorAll('.tab-subtab .tab-title');
//     const productsContent = document.querySelector('.products__content');

//     // Функция для активации главного таба
//     function activateMainTab(clickedTab) {
//         // Деактивируем все главные табы
//         mainTabs.forEach(tab => tab.classList.remove('active-title'));
        
//         // Активируем clicked таб
//         clickedTab.classList.add('active-title');
        
//         const tabId = clickedTab.getAttribute('data-tab');
        
//         // Скрываем все подтабы
//         subTabsContainers.forEach(container => {
//             container.classList.remove('active-tab');
//         });
        
//         // Показываем соответствующие подтабы
//         const targetSubTabs = document.querySelector(`.tab-subtab[data-tab="${tabId}"]`);
//         if (targetSubTabs) {
//             targetSubTabs.classList.add('active-tab');
            
//             // Активируем первую кнопку в подтабах
//             const firstSubTab = targetSubTabs.querySelector('.tab-title');
//             if (firstSubTab) {
//                 activateSubTab(firstSubTab);
//             }
//         }
//     }

//     // Функция для активации подтаба
//     function activateSubTab(clickedSubTab) {
//         const subTabsContainer = clickedSubTab.closest('.tab-subtab');
        
//         // Деактивируем все подтабы в текущем контейнере
//         subTabsContainer.querySelectorAll('.tab-title').forEach(tab => {
//             tab.classList.remove('active-title');
//         });
        
//         // Активируем clicked подтаб
//         clickedSubTab.classList.add('active-title');
        
//         // Здесь можно добавить логику для изменения контента карточек
//         updateProductsContent(clickedSubTab);
//     }

//     // Функция для обновления контента продуктов (заглушка)
//     function updateProductsContent(activeSubTab) {
//         productsContent.forEach(el => el.classList.remove("active-tab"))

//         productsContent.forEach(el => {
//             if (el.getAttribute("data-tab") === activeSubTab.getAttribute("data-tab")) {
//                 el.classList.add("active-tab")
//             }
//         })
//         // const subTabText = activeSubTab.textContent;
//         // console.log(`Активный подтаб: ${subTabText}`);
        
//         // Здесь можно добавить логику для фильтрации/изменения карточек
//         // Например:
//         // - Фильтрация по категориям
//         // - Загрузка нового контента через AJAX
//         // - Изменение отображаемых карточек
//     }

//     // Обработчики событий для главных табов
//     mainTabs.forEach(tab => {
//         tab.addEventListener('click', function() {
//             activateMainTab(this);
//         });
//     });

//     // Обработчики событий для подтабов
//     subTabs.forEach(tab => {
//         tab.addEventListener('click', function() {
//             activateSubTab(this);
//         });
//     });

//     // Активируем первый главный таб при загрузке
//     const firstMainTab = document.querySelector('.products__tab-content .tab-title.active-title');
//     if (firstMainTab) {
//         activateMainTab(firstMainTab);
//     }
// });