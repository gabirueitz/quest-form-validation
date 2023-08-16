const inputFields = document.querySelectorAll("input, textarea");
const button = document.querySelector("button");

inputFields.forEach((element) => {
	element.addEventListener("change", () => {
		if (element.value !== "") {
			element.classList.add("valid");
			const validationMsg = element.nextElementSibling;
			validationMsg.classList.remove("display");
		}
	});

	button.addEventListener("click", (e) => {
		e.preventDefault();
		if (element.value === "") {
			element.classList.add("invalid");
			const validationMsg = element.nextElementSibling;
			validationMsg.classList.add("display");
		} else {
			validationMsg.classList.remove("display");
		}
	});
});
