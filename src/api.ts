export type GetBlockByHeightParams = {
  height: number;
};
export type GetBlockByHeightResult = {
  block: Block;
  height: number;
};
export type Block = {
  hash: Bytes;
  height: number;
  weight: number;
  size: number;
  version: number;
  hashMerkleRoot: Bytes;
  witnessRoot: Bytes;
  treeRoot: Bytes;
  reservedRoot: Bytes;
  mask: Bytes;
  time: number;
  bits: Bytes;
  difficulty: number;
  chainwork: Bytes;
  nonce: number;
  extraNonce: Bytes;
  txsCount: number;
};
export type Bytes = string;
export type GetNameBidsByHashParams = {
  name: string;
  limit: number;
  offset: number;
};
export type GetNameBidsByHashResult = {
  bids: Array<NameBid>;
};
export type NameBid = {
  txid: Bytes;
  height: number | null;
  lockup: number;
  reveal: number | null;
};
export type GetNameRecordsByHashParams = {
  name: string;
  limit: number;
  offset: number;
};
export type GetNameRecordsByHashResult = {
  records: Array<NameRecord>;
};
export type NameRecord = {
  txid: Bytes;
  height: number | null;
  data: Bytes;
};
export type GetTransactionByTxidParams = {
  txid: Bytes;
};
export type GetTransactionByTxidResult = {
  txid: Bytes;
  block_height: number | null;
  witnessTx: Bytes;
  fee: number;
  rate: number;
  version: number;
  locktime: number;
  size: number;
  height: number;
  inputs: Array<TxInput>;
  outputs: Array<TxOutput>;
};
export type TxInput = {
  hashPrevout: Bytes;
  indexPrevout: number;
  sequence: number;
};
export type TxOutput = {
  value: number;
  address: string;
  covenantAction: CovenantAction;
  covenantNameHash?: Bytes;
  covenantHeight?: Bytes;
  covenantName?: Bytes;
  covenantBidHash?: Bytes;
  covenantNonce?: Bytes;
  covenantRecordData?: Bytes;
  covenantBlockHash?: Bytes;
  covenantVersion?: Bytes;
  covenantAddress?: Bytes;
  covenantClaimHeight?: Bytes;
  covenantRenewalCount?: Bytes;
  name?: string;
};
export type CovenantAction = string;
export type GetMempoolTxsParams = {
  limit: number;
  offset: number;
};
export type GetMempoolTxsResult = {
  txs: Array<Transaction>;
};
export type Transaction = {
  txid: Bytes;
  block_height: number | null;
  witnessTx: Bytes;
  fee: number;
  rate: number;
  version: number;
  locktime: number;
  size: number;
  height: number;
  inputs: Array<TxInput>;
  outputs: Array<TxOutput>;
};
export type GetBlocksParams = {
  limit: number;
  offset: number;
};
export type GetBlocksResult = {
  blocks: Array<Block>;
  count: number;
};
export type GetTransactionsByBlockHeightParams = {
  height: number;
  limit: number;
  offset: number;
};
export type GetTransactionsByBlockHeightResult = {
  txs: Array<Transaction>;
};
export type GetNameParams = {
  name: string;
};
export type GetNameResult = {
  reserved?: ReservedName;
  release_block: number;
  bids_count: number;
  records_count: number;
  state: State;
};
export type ReservedName = {
  originName: Bytes;
  name: string;
  nameHash: Bytes;
  claimAmount: number;
};
export type State = {
  open_height: number;
  current_state: AuctionState;
  auction_completed: boolean;
};
export type AuctionState = string;
export type SearchParams = {
  query: string;
};
export type SearchResult = {
  transaction: string;
  block: number;
  name: string;
};
export type API = {
  "/block": {
    params: GetBlockByHeightParams;
    result: GetBlockByHeightResult;
  };
  "/name/bids": {
    params: GetNameBidsByHashParams;
    result: GetNameBidsByHashResult;
  };
  "/name/records": {
    params: GetNameRecordsByHashParams;
    result: GetNameRecordsByHashResult;
  };
  "/tx": {
    params: GetTransactionByTxidParams;
    result: GetTransactionByTxidResult;
  };
  "/mempool": {
    params: GetMempoolTxsParams;
    result: GetMempoolTxsResult;
  };
  "/block/height/": {
    params: GetBlockByHeightParams;
    result: GetBlockByHeightResult;
  };
  "/blocks": {
    params: GetBlocksParams;
    result: GetBlocksResult;
  };
  "/block/txs": {
    params: GetTransactionsByBlockHeightParams;
    result: GetTransactionsByBlockHeightResult;
  };
  "/name": {
    params: GetNameParams;
    result: GetNameResult;
  };
  "/search": {
    params: SearchParams;
    result: SearchResult;
  };
};
