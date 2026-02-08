"use client";

import Editor from "@monaco-editor/react";

export default function Page() {
  return (
    <Editor height="90vh" defaultLanguage="typescript" defaultValue="// hi" />
  );
}
