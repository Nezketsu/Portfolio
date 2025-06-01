import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to my portfolio!</h1>
      <p className="text-lg text-gray-600">
        This is your new homepage. Start building your content here.
      </p>
    </div>
  );
}
