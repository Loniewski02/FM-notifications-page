const notificationsNumberSpan = document.querySelector('.notifications__heading-title span');
const markAll = document.querySelector('.notifications__heading-btn');
const allNotifications = document.querySelectorAll('.notifications__box');

const allNewNotifcations = document.querySelectorAll('.notifications__box--new');
let newNotifactions = allNewNotifcations.length;

notificationsNumberSpan.textContent = newNotifactions;

markAll.addEventListener('click', () => {
	allNotifications.forEach(el => {
		el.classList.remove('notifications__box--new');
	});
	notificationsNumberSpan.textContent = '0';
});

allNotifications.forEach(el =>
	el.addEventListener('click', () => {
		if (el.classList.contains('notifications__box--new')) {
			el.classList.remove('notifications__box--new');
			newNotifactions--;
			notificationsNumberSpan.textContent = newNotifactions;
		}
	})
);
