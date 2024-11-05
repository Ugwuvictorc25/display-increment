const allCounter = document.querySelectorAll(".counter");

allCounter.forEach((counter) => {
	counter.innerHTML = "0";

	function updateCounter() {
		const target = +counter.getAttribute("data-target");
		let increment = Math.ceil(target / 100);
		const currentCounter = +counter.innerHTML;

		if (currentCounter < target) {
			counter.innerHTML = currentCounter + increment;
			setTimeout(updateCounter, 10);
		} else {
			counter.innerHTML = target;
		}
	}
	updateCounter();
});
