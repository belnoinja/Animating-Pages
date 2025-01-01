import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItemStyles =
    "relative overflow-hidden border border-white rounded-full px-5 py-2 text-black font-medium text-lg transition-all ease-in-out duration-300 group bg-black";

  return (
    <div data-scroll-section id="main">
      <div id="page1" className="h-20 w-full bg-black fixed px-[2vw]">
        <nav className="flex items-center justify-between py-[2vw] w-full relative z-50">
          {/* Logo */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAAe1BMVEUAAAD////j4+OwsLDx8fH7+/vV1dXp6enb29seHh6ioqL39/fIyMilpaXz8/Pf3992dnYYGBjCwsKWlpYsLCxVVVVkZGQ6Ojq4uLiysrKcnJyAgIDOzs43NzdMTEyIiIgNDQ1dXV1zc3NCQkKMjIxZWVlQUFAiIiJ9fX25N26bAAAD6ElEQVR4nO3cf1eyMBQHcAYimiJCRmL4CGHm+3+FDz8EtmFlxvEO9v38k3U8nMttjO1uYBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVNbxynTn1FEoZMlKL9RxKMNiFz51JKqoE8Is6kgUcW4yYlKHoohDk5EJdSiK+GgyMqUORRVNRs7UkagiuCQkpg5EGfsqIVvqOBSSj9DcM4asnPxu80Qdg1pCxp6pY1DLjrF/1DGoJWZsTx2DWmy2oA5BLR8Yv0scZETk56MzXDW8A2a9kgBTGknejWCAxlujeCbZYtorKTLyRh2EUlZ5RjbUQajkBfXV0rvDVtX9xc0zciSORgFuW0Y08w9r6njIhfX6zLq897KEOiBycb0cEaflD+p46DnNCs0CGSnNmGBGHQ+9UMzIjjoeBRyFjCTU4ajA5BKCSoAhXTa4aAz/Gd2IIBX7VbakDoicLWVE+6qzxWSv1CHR2nQSwgLqmGgtuxnRexk8vJIQrcus/rWEaF1Dq0pFUykjDnVYhCZFAiy5M7Gpw6JTNo7QMOYLMSXUcZEphyLl+l2EjBTS8uzLp2gyXDWFshNxq89CT6Jrz7qretWKMP3VtUJSnHuzMvOPz4imTxrthKvD4TPyThcVpQU3yRXrrOxEGReZvCuNml9WYka0nPwWu0Sy+pdELhq5lKHRiIRRRyINWRnzCGN7uPlr6NriOOzKDDgkjPDRDlNnWyxrrtjH5S+bWTcjmu0yMr3DwjKCSVUru1ZFY7ZujxzN20HY9lpCNO1eC77zVULydqLjSG3TucsI9Cu4/pAQ/baSJJMfEpJPffR644ZYcfbCU3wlJa5GS3w7/szNcky238l1eabPs7/CXXfRvjTBf+5cS44Oi3y+0BakVpB2Bm2jbyaZcMpW0vnCpyVNh81RD+s/A/5cvxqahk+BUDYZ8dZwvsg8+f7xs/2RayrRt18drj2/LfGGx/Ge2m97oxybrPkGclM9NWtnPvYIC7Dcf/z2q4C7T4/uzUbcuTm/eEfg22hvw21C7N89m5i1d51R1enbXYm/f8DZambJ5Qak0+AfkU6Nej9RbnbXPaNuYMUEaLdM+o3v8aLT2q3vGfd2Bc37Fp1JtXhxXrFDfyE+WDitW72d3n2QzKvHa3EQuZGXf7j/YMTmdZOPp59/OpC0F2m477S99KnTv89N+JTYwywSzNNjvUDVSx256Z+ZM8jpcMIt1/W0c6g+4kC33XDz/rivFyWWU0VvqNXX9yYh/S29FMcc8Hpffdn3uf3BHPb7SY6zWR5/9vMXb/fa69EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gOzwx8HHfMjKwAAAABJRU5ErkJggg=="
            alt="Logo"
            className="h-[100px] max-w-[150px]"
          />

          {/* Desktop Navigation */}
          <div id="nav-part2" className="hidden lg:flex items-center gap-[1.5vw]">
            {["Home", "Events", "Gallery", "Sponsors"].map((item) => (
              <h4 key={item} className={navItemStyles}>
                <a
                  href="#"
                  className="relative z-10 text-white group-hover:text-black transition-colors duration-300"
                >
                  {item}
                </a>
                <span className="absolute inset-0 bg-transparent rounded-full group-hover:top-0 z=-100 group-hover:bg-white duration-200" />
              </h4>
            ))}
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black text-white z-40 flex flex-col items-center gap-4 py-4">
              {["Home", "Events", "Gallery", "Sponsors"].map((item) => (
                <h4 key={item} className={navItemStyles}>
                  <a
                    href="#"
                    className="relative z-10 text-white group-hover:text-black transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                  <span className="absolute inset-0 bg-transparent rounded-full group-hover:top-0 z=-100  group-hover:bg-white duration-200" />
                </h4>
              ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
