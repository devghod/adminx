const isDark = () => {
  return document.documentElement.classList.contains('dark');
};

const setIsDark = (mode: boolean) => {
  if (mode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export { isDark, setIsDark };
