interface CardProps {
    title: string;
    description: string;
    emoji: string;
    }


export default function Card({ title, description, emoji }: CardProps) {
  return (
    <div className="max-w-sm shadow-lg bg-purple-100 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-4 m-3 h-60 rounded-lg flex flex-col items-center justify-center">
      <div className="w-full h-48 object-cover p-4 m-4 text-4xl">{emoji}</div>
      <div className="">
        <div className="font-bold text-xl mb-2  ">{title}</div>
        <p className="text-gray-700 text-base ">{description}</p>
      </div>
    </div>
  );
}