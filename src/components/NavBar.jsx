export default function NavBar() {
  return (
    <>
    <header className="container flex  shadow  rounded-xl   bg-secondary mt-5 ">
      <nav >
        <ul className="flex gap-6">
          <li className="transition  text-sm font-semibold text-gray-800  rounded-md text-center hover:bg-primary w-auto p-1   hover:cursor-pointer hover:shadow active:scale-95">all</li>
          <li className="transition  text-sm font-semibold text-gray-800 rounded-md text-center hover:bg-primary w-auto p-1  hover:cursor-pointer hover:shadow active:scale-95">completed</li>
          <li className="transition text-sm font-semibold text-gray-800 rounded-md text-center hover:bg-primary w-auto p-1  hover:cursor-pointer hover:shadow active:scale-95">no completed</li>
        </ul>
      </nav>
    </header>

    </>
  );
}
