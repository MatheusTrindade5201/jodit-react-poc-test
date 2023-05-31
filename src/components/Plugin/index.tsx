import React, { useState } from "react";
import ReactDOM from "react-dom";
import "jodit";
import JoditEditor from "jodit-react";

const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
  "source",
  "|",
  "video",
  "file",
  {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "src/assets/react.svg",
    popup: (editor, current, self, close) => {
      /* function onSelected(e) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(
            editor.create.inside.fromHTML("{{" + mergeField + "}}")
          );
        }
      } */
      let divElement = editor.create.div("merge-field-popup");

      let widthInput = document.createElement("input");
      widthInput.setAttribute("id", "width-field");
      widthInput.setAttribute("type", "number");
      const widthLabelElement = document.createElement("label");
      widthLabelElement.setAttribute("for", "width-field");
      widthLabelElement.innerHTML = "Width: ";
      divElement.appendChild(widthLabelElement);

      divElement.appendChild(widthInput);
      const heightInput = document.createElement("input");
      heightInput.setAttribute("type", "number");
      heightInput.setAttribute("id", "height-field");
      let heightLabelElement = document.createElement("label");
      heightLabelElement.setAttribute("for", "height-field");
      heightLabelElement.innerHTML = "height: ";
      divElement.appendChild(heightLabelElement);
      divElement.appendChild(heightInput);

      let colorInput = document.createElement("input");
      colorInput.setAttribute("type", "color");
      colorInput.setAttribute("id", "color-field");
      let labelElement = document.createElement("label");
      labelElement.setAttribute("for", "color-field");
      labelElement.innerHTML = "color: ";
      divElement.appendChild(labelElement);

      divElement.appendChild(colorInput);
      let buttonPlugin = document.createElement("button");
      buttonPlugin.innerHTML = "Criar";
      buttonPlugin.addEventListener("click", () => {
        editor.s.insertHTML(
          `<div style="width: ${widthInput.value}px; height: ${heightInput.value}px; background-color: ${colorInput.value}; margin: 4px;" ></div>`
        );
      });
      divElement.appendChild(buttonPlugin);

      return divElement;
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  //defaultActionOnPaste: "insert_clear_html",
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: 800,
  height: 842,
};

const initialContent = ``;

function Editor() {
  const [data, setData] = useState(initialContent);

  return (
    <div
      className="App"
      style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
    >
      <JoditEditor
        value={data}
        config={editorConfig}
        onChange={(value) => setData(value)}
      />
    </div>
  );
}

export default Editor;
