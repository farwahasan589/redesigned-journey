import Link from 'next/dist/client/link';
import React from 'react'

const Navbar = () => {
  return <div className="hidden lg:block">
    <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">


<Link className="navbar__link relative" href="#">
    HOME
    </Link>
    <Link className="navbar__link relative" href="#">
    POSTS
    </Link>
    <Link className="navbar__link relative" href="#">
    REVIEWS
    </Link>
    <Link className="navbar__link relative" href="#">
    FOLLOWERS
    </Link>
    <Link className="navbar__link relative" href="#">
    PHOTOS
    </Link>
    <Link className="navbar__link relative" href="#">
    MORE
    </Link>
        </div>
    </div>
  </div>
  
}

export default Navbar;