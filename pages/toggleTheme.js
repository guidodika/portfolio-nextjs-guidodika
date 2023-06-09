import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ToogleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="fixed bottom-9 right-9 p-2 text-4xl bg-gray-900 hover:bg-gray-800 text-white rounded-full text-right dark:border-2 dark:border-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BsSun /> : <BsMoonStars />}
    </button>
  );
}

export default ToogleTheme;
