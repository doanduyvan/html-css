document.addEventListener("DOMContentLoaded", function () {
    let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");
    for (let i = 0; i < tabPanes.length; i++) {
      tabPanes[i].addEventListener("click", function () {
        document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");
        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      });
    }
  });