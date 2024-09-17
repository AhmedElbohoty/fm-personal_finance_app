type HighlightTextProps = {
  text: string;
  filter: string;
};

function HighlightText({ text, filter }: HighlightTextProps) {
  if (!filter.trim()) return text;

  const parts = text.split(new RegExp(`(${filter})`, "gi"));

  const texts: (string | JSX.Element)[] = [];
  parts.forEach((part, index) => {
    if (part.toLowerCase() === filter.toLowerCase()) {
      texts.push(
        <mark key={index} className="highlight">
          {part}
        </mark>
      );
    } else {
      texts.push(part);
    }
  });

  return <>{texts}</>;
}

export default HighlightText;
