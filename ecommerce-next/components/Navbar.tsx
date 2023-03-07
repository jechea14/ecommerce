import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
// import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { MenuData } from "../utils/data";
import Link from "next/link";
import Cart from "./Cart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Container } from "@mantine/core";

export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const theme = useMantineTheme();
  const { cartQuantity } = useShoppingCart();

  return (
    <nav>
      <Container
        size="xl"
        className="flex justify-between items-center mt-2 mb-2"
      >
        {/* Menu Drawer */}
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          variant="temporary"
        >
          <Box
            sx={{
              width: 200,
            }}
          >
            <div className="p-10 space-y-4">
              {MenuData.map((menu) => (
                <div
                  key={menu.id}
                  className="uppercase hover:text-purple-500 hover:transition"
                >
                  <Link
                    href={`/${menu.name.toLowerCase()}`}
                    as={`/${menu.name.toLowerCase()}`}
                  >
                    {menu.name}
                  </Link>
                </div>
              ))}
            </div>
          </Box>
        </Drawer>

        {/* Cart Drawer */}
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          variant="temporary"
        >
          <Box
            sx={{
              width: 300,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 300,
                boxSizing: "border-box",
              },
            }}
          >
            <Cart />
          </Box>
        </Drawer>

        <div className="flex">
          {/* Mobile Navbar menu */}
          <button className="md:hidden mr-3">
            <AiOutlineMenu size={25} onClick={() => setMenuOpen(true)} />
          </button>

          <Link href={"/"}>
            <button>Home</button>
          </Link>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex md:space-x-6">
          {MenuData.map((menu) => (
            <Link
              href={`/${menu.name.toLowerCase()}`}
              as={`/${menu.name.toLowerCase()}`}
              key={menu.id}
              className="font-semibold hover:text-purple-300 hover:transition"
            >
              <button>{menu.name.toUpperCase()}</button>
            </Link>
          ))}
        </div>

        {/* Cart */}
        <button onClick={() => setCartOpen(true)} className="relative">
          <AiOutlineShoppingCart size={30} />
          {cartQuantity > 0 && (
            <div className="rounded-2xl w-5 h-5 bg-red-600 flex justify-center items-center absolute bottom-4 -right-1">
              {cartQuantity}
            </div>
          )}
        </button>
      </Container>
    </nav>
  );
};
