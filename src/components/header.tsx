import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex flex-row max-w-7xl mt-4 m-[auto]">
        <Link href="/" className="text-white font-bold font-sans text-2xl ">JOAT.GG</Link>
      </header>
    </>
  )
}

export default Header;
