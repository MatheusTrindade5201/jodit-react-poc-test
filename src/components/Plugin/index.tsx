import { useState, useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";

const JoditEditorFree = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: true,
    language: "en",
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
    },
    plugins: ["insertClass", "changeCase"],
    showBlocks: {
      enable: false,
      color: "#ccc",
      tagList: ["p", "div"],
    },
    buttons: [...Jodit.defaultOptions.buttons, "|"],
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={editorConfig}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
};

export default JoditEditorFree;
