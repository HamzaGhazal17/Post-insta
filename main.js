let MainHead = document.createElement("div");
MainHead.className = "head-main";
let heading = document.createElement("h1");
heading.className = " head-text";
heading.innerHTML = "Logo";

let Imglogo = document.createElement("img");
Imglogo.className = " img-logo";
Imglogo.src = "image/Logo.png";
MainHead.appendChild(heading);
MainHead.appendChild(Imglogo);
let headingrow = document.createElement("hr");
headingrow.className = "head-row";
let Maincenterdiv = document.createElement("div");
Maincenterdiv.className = "maincenterdiv";
let centerdiv = document.createElement("div");
centerdiv.className = "center-div";
let centerhead = document.createElement("h1");
centerhead.className = "center-head";
centerhead.innerHTML = "Add Post";

const container = document.createElement("div");

function createField(labelText, inputType, inputPlaceholder) {
  const fieldDiv = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.textContent = labelText + ": ";
  input.type = inputType;
  input.placeholder = inputPlaceholder;

  fieldDiv.appendChild(label);
  fieldDiv.appendChild(input);

  return fieldDiv;
}
const titleField = createField("Title", "text", "Enter title here");

const descriptionField = createField(
  "Description",
  "text",
  "Enter description here"
);

const imageSrcField = createField(
  "Image Src",
  "text",
  "Enter image source here"
);

container.className = "fields-container";

centerdiv.appendChild(centerhead);

container.appendChild(titleField);
container.appendChild(descriptionField);
container.appendChild(imageSrcField);
centerdiv.appendChild(container);
Maincenterdiv.appendChild(centerdiv);
let divbuttoun = document.createElement("div");
divbuttoun.className = "div-boutton";
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.addEventListener("click", function () {
  alert("Form submitted!");
});

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.addEventListener("click", function () {
  const inputFields = container.getElementsByTagName("input");
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
});

divbuttoun.appendChild(submitBtn);
divbuttoun.appendChild(clearBtn);
container.appendChild(divbuttoun);
let Buttoncenter = document.createElement("div");
Buttoncenter.className = "button-center";
const viewPostsBtn = document.createElement("button");
viewPostsBtn.className = "view-post";
viewPostsBtn.textContent = "View Posts";
Buttoncenter.appendChild(viewPostsBtn);
let headingrow1 = document.createElement("hr");
headingrow1.className = "head-row";
let Footer = document.createElement("div");
Footer.className = "footer";
let heading1 = document.createElement("h1");
heading1.className = " head-text1";
heading1.innerHTML = "FOOTER";
Footer.appendChild(heading1);

document.body.appendChild(MainHead);
document.body.appendChild(headingrow);

document.body.appendChild(Maincenterdiv);
document.body.appendChild(Buttoncenter);
document.body.appendChild(headingrow1);
document.body.appendChild(Footer);
