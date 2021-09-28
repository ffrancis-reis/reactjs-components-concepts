export function Header(props: any) {
  const { selectedGenre } = props;

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
