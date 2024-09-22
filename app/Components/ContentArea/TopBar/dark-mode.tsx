import { useGlobalContext } from "@/context/use-context-api";

function DarkMode() {
  const { darkMode, setDarkMode } = useGlobalContext();
  function handleClickDarkMode(index: number) {
    const updatedDarkMode = darkMode.map((mode, i) => {
      if (i === index) {
        return { ...mode, isSelected: true };
      } else {
        return { ...mode, isSelected: false };
      }
    });
    setDarkMode(updatedDarkMode);
  }
  return (
    <div className="bg-slate-100 h-[36px] w-[74px] rounded-3xl flex items-center gap-2 pl-[5px]">
      {darkMode.map((mode, index) => {
        return (
          <div
            className={`${
              mode.isSelected
                ? "bg-purple-600 text-white"
                : "bg-slate-100 text-purple-600"
            }
                    w-7 h-7 flex items-center justify-center rounded-full top-[4px] p-1 left-1 cursor-pointer select-none`}
            key={index}
            onClick={() => handleClickDarkMode(index)}
          >
            {mode.icon}
          </div>
        );
      })}
    </div>
  );
}

export default DarkMode;