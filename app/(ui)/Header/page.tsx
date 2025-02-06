import Link from "next/link";
import { Search, ShoppingCart } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header border-b-2 bg-gray-100 shadow-md">
        <div className="userbar h-20 flex justify-between items-center px-10">
          <div className="logo font-bold text-xl transition-transform transform hover:-translate-y-2">
            Logo
          </div>
          <div className="userInfo">User Info</div>
        </div>
        <div className="navbar h-16 flex justify-between items-center px-10 bg-white shadow-sm">
          <div className="flex space-x-4">
            <Link href="/builder">
              <div className="hover:text-blue-500">Builder</div>
            </Link>
            <div className="relative group">
              <div className="hover:text-blue-500 cursor-pointer">Parts</div>
              <div className="absolute bg-white border mt-2 hidden group-hover:block shadow-lg">
                <Link href="/products/cpu">
                  <div className="px-4 py-2 hover:bg-gray-100">CPU</div>
                </Link>
                <Link href="/products/gpu">
                  <div className="px-4 py-2 hover:bg-gray-100">GPU</div>
                </Link>
                <Link href="/products/motherboard">
                  <div className="px-4 py-2 hover:bg-gray-100">Motherboard</div>
                </Link>
                <Link href="/products/memory">
                  <div className="px-4 py-2 hover:bg-gray-100">Memory</div>
                </Link>
                <Link href="/products/cooler">
                  <div className="px-4 py-2 hover:bg-gray-100">Cooler</div>
                </Link>
                <Link href="/products/storage">
                  <div className="px-4 py-2 hover:bg-gray-100">Storage</div>
                </Link>
                <Link href="/products/powersupply">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Power Supply
                  </div>
                </Link>
                <Link href="/products/case">
                  <div className="px-4 py-2 hover:bg-gray-100">Case</div>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="hover:text-blue-500 cursor-pointer">
                Peripherals
              </div>
              <div className="absolute bg-white border mt-2 hidden group-hover:block shadow-lg">
                <Link href="/products/keyboard">
                  <div className="px-4 py-2 hover:bg-gray-100">Keyboard</div>
                </Link>
                <Link href="/products/mouse">
                  <div className="px-4 py-2 hover:bg-gray-100">Mouse</div>
                </Link>
                <Link href="/products/monitor">
                  <div className="px-4 py-2 hover:bg-gray-100">Monitor</div>
                </Link>
                <Link href="/products/headset">
                  <div className="px-4 py-2 hover:bg-gray-100">Headset</div>
                </Link>
                <Link href="/products/speakers">
                  <div className="px-4 py-2 hover:bg-gray-100">Speakers</div>
                </Link>
              </div>
            </div>
            <Link href="/reviews">
              <div className="hover:text-blue-500">Reviews</div>
            </Link>
            <Link href="/support">
              <div className="hover:text-blue-500">Support</div>
            </Link>
            <Link href="/about-us">
              <div className="hover:text-blue-500">About Us</div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
