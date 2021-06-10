function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

	const tabs = document.querySelectorAll(tabsSelector),
		tabContent = document.querySelectorAll(tabsContentSelector),
		tabParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabContent[i].classList.add('show', 'fade');
		tabContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabParent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

}

export default tabs;