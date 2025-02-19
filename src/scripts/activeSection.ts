function updateActiveSection() {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(".nav-link");

	// Get the current scroll position
	const scrollPosition = window.scrollY + window.innerHeight / 5;
	// Find the current section
	sections.forEach((section: Element) => {
		const sectionTop = (section as HTMLElement).offsetTop;
		const sectionHeight = (section as HTMLElement).offsetHeight;
		const sectionId = section.getAttribute("id");

		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			// Remove active class from all links
			navLinks.forEach((link) => {
				link.classList.remove("text-primary", "underline");
			});

			// Add active class to current section link
			const activeLink = document.querySelector(
				`.nav-link[data-section="${sectionId}"]`
			);
			if (activeLink) {
				activeLink.classList.add("text-primary", "underline");
			}
		}
	});
}

export function initActiveSection() {
	// Add scroll event listener
	document.addEventListener("scroll", updateActiveSection);

	// Update on page load
	document.addEventListener("astro:page-load", () => {
		updateActiveSection();
	});
}
