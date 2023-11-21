import styles from '../styles/Home.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import axios from 'axios';

export default function Home({ country }) {
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
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
