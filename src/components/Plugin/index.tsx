/* eslint-disable @typescript-eslint/no-explicit-any */
import "jodit";
import JoditEditor from "jodit-react";
import { useState } from "react";

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
    popup: (editor: {
      create: { div: (arg0: string) => any };
      s: { insertHTML: (arg0: string) => void };
    }) => {
      /* function onSelected(e) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(
            editor.create.inside.fromHTML("{{" + mergeField + "}}")
          );
        }
      } */
      const divElement = editor.create.div("merge-field-popup");

      const widthInput = document.createElement("input");
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
      const heightLabelElement = document.createElement("label");
      heightLabelElement.setAttribute("for", "height-field");
      heightLabelElement.innerHTML = "height: ";
      divElement.appendChild(heightLabelElement);
      divElement.appendChild(heightInput);

      const colorInput = document.createElement("input");
      colorInput.setAttribute("type", "color");
      colorInput.setAttribute("id", "color-field");
      const labelElement = document.createElement("label");
      labelElement.setAttribute("for", "color-field");
      labelElement.innerHTML = "color: ";
      divElement.appendChild(labelElement);

      divElement.appendChild(colorInput);
      const buttonPlugin = document.createElement("button");
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
