const hands = ["👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿"];

let selectedHand = "👏";

function copyToClipboard() {
  let copyText = document.getElementById("copyText");
  if (copyText.value === "") {
    return;
  }
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let button = document.querySelector("button");
  button.textContent = "Copied to clipboard!";

  setTimeout(() => {
    button.textContent = "Copy to clipboard";
  }, 2000);
}

document.getElementById("copyText").addEventListener("input", function (e) {
  this.value = this.value.replace(/ /g, selectedHand);
});

let elements = document.getElementsByClassName("bolinha");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    selectedHand = this.id;
    for (let i = 0; i < hands.length; i++) {
      if (selectedHand === "b" + (i + 1)) {
        selectedHand = hands[i];
      }
    }
  });
}
