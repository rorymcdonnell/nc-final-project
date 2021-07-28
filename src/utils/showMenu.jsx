//function that brings out and hides
export const showMenu = () => {
  if (!document.getElementById("navbar").classList.contains("active")) {
    document.getElementById("navbar").classList.add("active");
  } else {
    document.getElementById("navbar").classList.remove("active");
  }
};
