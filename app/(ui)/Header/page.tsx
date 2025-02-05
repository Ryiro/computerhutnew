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
            <div className="border-2">Parts</div>

            <div className="border-2">Peripherals</div>

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
