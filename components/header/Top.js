import styles from './styles.module.scss';
import { useState } from 'react';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import UserMenu from './UserMenu';
export default function Top() {
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
            <Image
              src="https://www.seekpng.com/png/full/270-2704243_quality-hd-good-photos-of-bangladesh-flag-bangladesh.png"
              alt=""
              width={28}
              height={28}
            />
            <span>Bangladesh / BDT</span>
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
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <Image
                    src="https://www.seekpng.com/png/full/138-1388103_user-login-icon-login.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <span>Mazidul</span>

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
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}