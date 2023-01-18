import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Drawer, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { MenuData } from "../utils/data";
import Link from "next/link";
import Cart from "./Cart";

export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useMantineTheme();

  return (
    <nav className="flex justify-between items-center mt-2 mb-2">
      {/* Menu Drawer */}
      <Drawer
        position="left"
        opened={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        {MenuData.map((menu) => (
          <div key={menu.id}>
            <Link
              href={`/${menu.name.toLowerCase()}`}
              as={`/${menu.name.toLowerCase()}`}
            >
              {menu.name}
            </Link>
          </div>
        ))}
      </Drawer>

      {/* Cart Drawer */}
      <Drawer
        position="right"
        opened={cartOpen}
        onClose={() => setCartOpen(false)}
        overlayColor={theme.colors.dark[9]}
      >
        <Cart />
      </Drawer>

      {/* Mobile Navbar menu */}
      <button className="md:hidden">
        <AiOutlineMenu size={25} onClick={() => setMenuOpen(true)} />
      </button>

      <div>
        <Link href={"/"}>Home</Link>
      </div>

      {/* desktop menu */}
      <div className="hidden md:flex">
        {MenuData.map((menu) => (
          <Link
            href={`/${menu.name.toLowerCase()}`}
            as={`/${menu.name.toLowerCase()}`}
            key={menu.id}
          >
            {menu.name}
          </Link>
        ))}
      </div>

      {/* Account and Cart */}
      <div className="flex gap-x-2">
        <button>
          <VscAccount size={25} />
        </button>
        <button onClick={() => setCartOpen(true)}>
          <AiOutlineShoppingCart size={27} />
        </button>
      </div>
    </nav>
  );
};
