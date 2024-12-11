"use client";
import React, { useEffect, useRef } from "react";
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import List from "@editorjs/list";

type Props = {
  data?: OutputData;
  holder?: string | "editor-holder";
  onChange?(val: OutputData): void;
};

const Editor = ({ data, holder = "editor-holder", onChange }: Props) => {
  const editorRef = useRef<EditorJS>(null);

  const config: EditorConfig = {
    holder,
    data,
    autofocus: true,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          levels: [1, 2, 3, 4, 5],
          defaultLevel: 1,
        },
      },
      code: CodeTool,
      list: List,
    },
    async onChange(api, event) {
      const data = await api.saver.save();

      onChange && onChange(data);
    },
  };

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS(config);

      editorRef.current = editor;
    }
  }, []);

  return <div id={holder}></div>;
};

export default Editor;
