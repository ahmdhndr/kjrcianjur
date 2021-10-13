export default function Main({ children, cn }) {
  return (
    <main
      className={`container max-w-6xl mx-auto p-3 text-secondary-200 ${cn}`}
    >
      {children}
    </main>
  );
}
