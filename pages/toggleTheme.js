import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ToogleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="fixed bottom-9 right-9 p-2 text-4xl bg-gray-900 text-white rounded-full text-right dark:border-2 dark:border-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BsSun /> : <BsMoonStars />}
    </button>
  );
}
