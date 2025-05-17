const markedMatch = (text, filter) => {
  if (!filter) return text;

  const regExp = new RegExp(`(${filter})`, "gi");
  return text.split(regExp).map((section, i) => {
    if (section.toLowerCase() === filter.toLowerCase()) {
      return <u key={i} className="bg-black text-yellow-300">{section}</u>
    }
    return section;
  });
};

export default markedMatch;