import type { MetaFunction } from "@remix-run/node";
// import { Button } from "@/components/ui/button";
// import MyForm from "@/components/ui/MyForm";
import Sidebar from '@/components/ui/Sidebar';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Sidebar />
      <div className="ml-64 p-4">
        <h1 className="text-3xl font-bold">Welcome to Next.js with Shadcn UI</h1>
        <p>This is a sample page with a sidebar.</p>
      </div>
    </div>
  );
}

