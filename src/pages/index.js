const ENV = require("@config/pipeline/env.json");
/**
 * Default route "/"
 * @returns {component}
 */
export default function Home(props) {
  console.log({ env: ENV });
  return (
    <>
      <div>Index.js</div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  let f_data = null;
  await fetch(
    "https://consul-api.dev.fligno.io/api/services/v1/consul/kv/list?token=ba017c39-9b66-f5b3-beec-1567bf2ebcaa&address=service-consul.fligno.io"
  )
    .then((resp) => resp.json())
    .then((data) => {
      f_data = data;
    });

  // *
  for (let env of f_data) {
    process.env[env.key] = env.value;
  }

  return {
    props: {
      test: "world",
      f_data,
    },
  };
};
