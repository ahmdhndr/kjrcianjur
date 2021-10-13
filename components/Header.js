import Navbar from '../components/Navbar';

export default function Header() {
  return (
    <header>
      <div className="bg-primary-200 text-white z-10 shadow-md fixed top-0 left-0 w-full">
        <div className="max-w-6xl mx-auto flex justify-between px-4 py-3 md:py-0 xl:px-0">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
