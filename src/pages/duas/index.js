export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/duas/dua's-importance?cat=1",
      permanent: false,
    },
  };
}

export default function Duas() {
  return null; // This component will never be rendered because of the redirect
}