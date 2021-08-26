
import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import Image from 'next/image';

const Coin = ({ coin }) => {
  return (
    <Layout className="fix"> 
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <Image
          className={styles.coin_image}
            src={coin.image.large}
            alt={coin.name}
            layout="fixed"
            width={220}
            height={220}
            priority
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>
          ₹{coin.market_data.current_price.inr}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}