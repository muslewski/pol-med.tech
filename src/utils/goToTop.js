function goToTop() {
  document.querySelector(".wrapper").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function goToTopRough() {
  document.querySelector(".wrapper").scrollTo(0, 0);
}

export default goToTop;
export { goToTopRough };
