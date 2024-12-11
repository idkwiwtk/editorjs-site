import Editor from "@/components/editor";
import dynamic from "next/dynamic";

const EditorBlock = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-1/2 mx-auto p-12">
      <h1 className="mb-4">Editor.js</h1>

      <div>
        <Editor />
      </div>
    </main>
  );
}
