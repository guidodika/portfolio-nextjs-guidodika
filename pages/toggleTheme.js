import { BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ToogleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="fixed bottom-9 right-9 p-2 text-4xl bg-gray-900 text-white rounded-full text-right"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <BsMoonStars />
    </button>
  );
}
