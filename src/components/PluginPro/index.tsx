import { useState, useRef } from "react";
import JoditEditor, { Jodit } from "jodit-pro-react";

const names = [
  "@mary",
  "@jain",
  "@entany",
  "@isaak",
  "@ivan",
  "@fedya",
  "@yakov",
  "@jhon",
  "@lena",
  "@elvin",
];

const CONFIG = {
  readonly: false,
  license: "",
  enter: "br",
  autocomplete: {
    sources: [names],
  },
  extraPlugins: [
    "changeCase",
    "google-search",
    "exportDocs",
    "pasteFromWordPro",
    "todoList",
  ],
  buttons: [
    ...Jodit.defaultOptions.buttons,
    "|",
    "changeCase",
    "exportDocs",
    "todoList",
    "pageBreak", // ✅ Adicionado botão todoList
  ],
  showBlocks: {
    enable: true,
    color: "#ccc",
    tagList: ["*"],
  },
  exportDocs: {
    ajax: {
      url: "https://xdsoft.net/jodit/finder/",
    },
  },
  defaultBlock: "p",
  highlightSignature: {
    schema: {
      "\\$\\{([^}]+)\\}": (
        jodit: typeof Jodit,
        matched: RegExpMatchArray
      ): HTMLElement => {
        let color = "yellow";

        switch (matched[1]) {
          case "formSubmittedDate":
            color = "red";
            break;
          case "formSessionURL":
            color = "#0f0";
            break;
        }

        const span = jodit.createInside.element("span", {
          style: {
            backgroundColor: color,
          },
        });

        return span;
      },
    },
  },
  pageBreak: {
    separator: "<!-- pagebreak -->",
  },

  pasteFromWord: {
    enable: true,
    convertUnitsToPixel: true,
    allowedStyleProps: [
      "background",
      "background-color",
      "border",
      "border-.*",
      "color",
      "font-family",
      "font-size",
      "font-style",
      "font-weight",
      "height",
      "line-height",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "padding",
      "text-align",
      "text-decoration",
      "text-indent",
      "vertical-align",
      "width",
    ],
  },
  beautifyHTML: true,
};

const JoditProEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={CONFIG}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
};

export default JoditProEditor;
