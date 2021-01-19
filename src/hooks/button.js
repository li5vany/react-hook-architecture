
let counter = 2;

export const useButton = () => ({
  buttonRegister: (ref) => {
    if (ref && counter <= 2 && counter > 0) {
      counter--;
      ref.onmouseenter = () => {
        if (ref.innerText === "E") {
          ref.attributes["style"].value = ref.attributes["style"].value.replace("45deg", "0deg");
          ref.innerText = "Edit";
        } else if (ref.innerText === "D") {
          ref.attributes["style"].value = ref.attributes["style"].value.replace("45deg", "0deg");
          ref.innerText = "Delete"
        }
      };
      ref.onmouseleave = () => {
        if (ref.innerText === "Edit") {
          ref.attributes["style"].value = ref.attributes["style"].value.replace("0deg", "45deg");
          ref.innerText = "E"
        } else if (ref.innerText === "Delete") {
          ref.attributes["style"].value = ref.attributes["style"].value.replace("0deg", "45deg");
          ref.innerText = "D"
        }
      }
    } else if (counter < 0) {
      counter = 2;
    } else {
      counter--;
    }
  }
});