import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/7e4ecd82-fba6-4dca-ab56-95e391bd14bb-f49y70.png",
  "https://utfs.io/f/d7604804-527a-4935-a6b2-74796572eb7e-xjc2j7.png",
  "https://utfs.io/f/1126d6e0-81a2-4d90-b3b0-c31daa4f6fa0-k8owvz.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
