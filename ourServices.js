const serviceDots = document.querySelectorAll(".customSlideDots div");
const serviceTabs = document.querySelectorAll(".serviceTabs span");
const serviceImages = document.querySelectorAll(".serviceImages img");

serviceDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    let image = document.querySelector(".serviceImages .activeServiceImage");
    image.classList.remove("activeServiceImage");
    serviceImages[index].classList.add("activeServiceImage");

    document
      .querySelector(".customSlideDots .activeDot")
      .classList.remove("activeDot");
    document
      .querySelector(".serviceTabs .activeServiceTab")
      .classList.remove("activeServiceTab");
    serviceDots[index].classList.add("activeDot");
    serviceTabs[index].classList.add("activeServiceTab");
  });
});

serviceTabs.forEach((Tab, index) => {
  Tab.addEventListener("click", (e) => {
    let image = document.querySelector(".serviceImages .activeServiceImage");
    image.classList.remove("activeServiceImage");
    serviceImages[index].classList.add("activeServiceImage");

    document
      .querySelector(".customSlideDots .activeDot")
      .classList.remove("activeDot");
    document
      .querySelector(".serviceTabs .activeServiceTab")
      .classList.remove("activeServiceTab");
    serviceDots[index].classList.add("activeDot");
    serviceTabs[index].classList.add("activeServiceTab");
  });
});
