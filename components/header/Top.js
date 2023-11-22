import styles from './styles.module.scss';
import { useState } from 'react';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import UserMenu from './UserMenu';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Top({ country }) {
  const { data: session } = useSession();
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            {/* <img
              src="https://www.seekpng.com/png/full/270-2704243_quality-hd-good-photos-of-bangladesh-flag-bangladesh.png"
              alt="bd-flag"
            /> */}
            <Image src={country.flag} alt="" width={28} height={28} />
            <span>{country?.name} / BDT</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help </span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whislist</span>
            </Link>
          </li>

          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <Image
                    src={session?.user.image}
                    // src="https://www.seekpng.com/png/full/138-1388103_user-login-icon-login.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <span>{session?.user.name}</span>

                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>

                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu loggedIn={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
