import styles from '../styles/Home.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  return (
    <>
      {session ? (
        <div>
          <Header country={country} />
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <Footer country={country} />
        </div>
      ) : (
        <div>
          <Header country={country} />
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
          <Footer country={country} />
        </div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get(`https://api.ipregistry.co/?key=${process.env.COUNTRY_API}`)
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, code: data.code, flag: data.flag.emojitwo },
      country: {
        name: 'Bangladesh',
        code: 'BD',
        flag: 'https://www.seekpng.com/png/full/270-2704243_quality-hd-good-photos-of-bangladesh-flag-bangladesh.png',
      },
    },
  };
}
