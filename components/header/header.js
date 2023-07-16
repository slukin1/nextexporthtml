import ColorHeaderTop from '../components/header/colorheadertop';

import Link from 'next/link';

const Header = () => (
  <header className="main">
    <ColorHeaderTop>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/2020/first-post/with/catch/all/routes"
          >
            First Post
          </Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/2020/second-post/with/catch/all/routes"
          >
            Second Post
          </Link>
        </li>
      </ul>
    </ColorHeaderTop>
  </header>
);

export default Header;
