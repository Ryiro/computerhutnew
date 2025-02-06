import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header border-2">
        <div className="userbar h-20 flex justify-between border-2">
          <div className="logo border-2 sticky left-10">Logo</div>
          <div className="userInfo border-2 sticky right-10">User Info</div>
        </div>
        <div className="navbar h-16 flex justify-between border-2">
          <div className="border-2 flex justify-between sticky left-10">
            <Link href="/builder">
              <div className="border-2">Builder</div>
            </Link>
            <div className="relative border-2 group">
              <div className="border-2">Parts</div>
              <div className="absolute bg-white border-2 mt-2 hidden group-hover:block">
                <Link href="/products/cpu">
                  <div className="border-2">CPU</div>
                </Link>
                <Link href="/products/gpu">
                  <div className="border-2">GPU</div>
                </Link>
                <Link href="/products/motherboard">
                  <div className="border-2">Motherboard</div>
                </Link>
                <Link href="/products/memory">
                  <div className="border-2">Memory</div>
                </Link>
                <Link href="/products/cooler">
                  <div className="border-2">Cooler</div>
                </Link>
                <Link href="/products/storage">
                  <div className="border-2">Storage</div>
                </Link>
                <Link href="/products/powersupply">
                  <div className="border-2">Power Supply</div>
                </Link>
                <Link href="/products/case">
                  <div className="border-2">Case</div>
                </Link>
              </div>
            </div>
            <div className="relative border-2 group">
              <div className="border-2">Peripherals</div>
              <div className="absolute bg-white border-2 mt-2 hidden group-hover:block">
                <Link href="/products/keyboard">
                  <div className="border-2">Keyboard</div>
                </Link>
                <Link href="/products/mouse">
                  <div className="border-2">Mouse</div>
                </Link>
                <Link href="/products/monitor">
                  <div className="border-2">Monitor</div>
                </Link>
                <Link href="/products/headset">
                  <div className="border-2">Headset</div>
                </Link>
                <Link href="/products/speakers">
                  <div className="border-2">Speakers</div>
                </Link>
              </div>
            </div>
            <Link href="/reviews">
              <div className="border-2">Reviews</div>
            </Link>
            <Link href="/support">
              <div className="border-2">Support</div>
            </Link>
            <Link href="/about-us">
              <div className="border-2">About Us</div>
            </Link>
          </div>
          <div className="border-2 sticky right-10">Search</div>
        </div>
      </div>
    </>
  );
};

export default Header;
