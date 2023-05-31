import React, { useRef, useState } from "react";
import { Jodit } from "jodit";
import JoditEditor from "jodit-react";
import { IJodit } from "jodit/types/types";

const JoditCustomPlugin = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const inputWidthRef = useRef(null);
  const inputHeightRef = useRef(null);
  const inputColorRef = useRef(null);
  const inputRadiusRef = useRef(null);

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
  ];

  const handleCustomButtonClick = (editor: IJodit) => {
    const inputWidthValue = inputWidthRef.current.value;
    const inputHeightValue = inputHeightRef.current.value;
    const inputColorValue = inputColorRef.current.value;
    const inputRadiusValue = inputRadiusRef.current.value;
    editor.s.insertHTML(
      `<div style="width: ${inputWidthValue}px; height: ${inputHeightValue}px; background-color: ${inputColorValue}; border-radius: ${inputRadiusValue}px"></div>`
    );
    inputWidthRef.current.value = "";
    inputHeightRef.current.value = "";
    inputColorRef.current.value = "";
    inputRadiusRef.current.value = "";
  };

  const config = {
    // Configurações do editor Jodit
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    extraButtons: [
      {
        name: "customPlugin",
        iconURL: "src/assets/react.svg",
        exec: handleCustomButtonClick,
        tooltip: "Meu Plugin Personalizado",
      },
      {
        name: "customPlugin",
        iconURL: "src/assets/react.svg",
        exec: (editor: IJodit) => {
          editor.s.insertHTML(new Date().toTimeString());
        },
        tooltip: "Meu Plugin Personalizado",
      },
    ],
  };

  return (
    <>
      <label>
        Width
        <input type="number" ref={inputWidthRef} />
      </label>
      <label>
        Height
        <input type="number" ref={inputHeightRef} />
      </label>
      <label>
        Color
        <input type="color" ref={inputColorRef} />
      </label>
      <label>
        Rounded
        <input type="text" ref={inputRadiusRef} />
      </label>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <button onClick={() => console.log(content)}>Content</button>
    </>
  );
};

export default JoditCustomPlugin;
