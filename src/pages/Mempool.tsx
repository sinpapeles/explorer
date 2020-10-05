import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Hash from "components/Hash";
import Pagination from "components/Pagination";
import Spinner from "components/Spinner";

import Transactions from "components/Transaction/Table";

interface Props {
  page: number;
}

const limit = 50;

const Mempool: FC<Props> = ({ page }: Props) => {
  useTitle(`Mempool`);

  const transactions = useAPI("/mempool", {
    limit,
    offset: page * limit,
  });

  if (!transactions) return <Spinner />;
  return (
    <>
      <h2 className="separator">Mempool</h2>
      {transactions.txs ? (
        <Transactions transactions={transactions.txs} />
      ) : (
        "Mempool is empty."
      )}
    </>
  );
};
export default Mempool;
