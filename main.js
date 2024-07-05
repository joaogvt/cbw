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

function isLastCharHandEmoji(value) {
  return hands.some((hand) => value.endsWith(hand));
}

document.getElementById("copyText").addEventListener("keydown", function (e) {
  if (this.value.length === 0 && e.key === " ") {
    e.preventDefault();
  } else if (isLastCharHandEmoji(this.value) && e.key === " ") {
    e.preventDefault();
  }
});

document.getElementById("copyText").addEventListener("input", function (e) {
  this.value = this.value.replace(/ /g, selectedHand);
});

let elements = document.getElementsByClassName("bolinha");

if (elements.length > 0) {
  elements[0].style.outline = "2px solid #58c0f2";
}

function removeOutlineFromAll() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.outline = "none";
  }
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    removeOutlineFromAll();
    selectedHand = this.id;
    for (let i = 0; i < hands.length; i++) {
      if (selectedHand === "b" + (i + 1)) {
        selectedHand = hands[i];
      }
      document.getElementById("copyText").focus();
      this.style.outline = "2px solid #58c0f2";
    }
  });
}
