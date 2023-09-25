interface TextHighlightProps {
  color: string;
  children: React.ReactNode;
}

function TextHighlight({ color, children }: TextHighlightProps) {
  const style = {
    color: color || "inherit",
  };

  return <span style={style}>{children}</span>;
}

export default TextHighlight;
