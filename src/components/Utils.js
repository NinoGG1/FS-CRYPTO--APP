export const isStableCoin = (coin) => {
  let stable = [
    "usdt",
    "usdc",
    "dai",
    "tusd",
    "busd",
    "fdusd",
    "husd",
    "usdk",
    "usdn",
    "usdp",
    "usdq",
    "usds",
    "usdt.e",
    "ustc",
    "usdc.e",
    "crvusd",
    "usdd",
    "frax",
    "xaut",
    "paxg",
    "ustc",
    "lusd",
    "usdb",
    "usdo",
    "lusd",
    "mkusd",
    "alusd",
    "pyusd",
    "gusd",
    "eurs",
    "eusd",
    "usdx",
    "susd",
    "mim",
    "hay",
  ];
  if (stable.includes(coin)) {
    return false;
  } else {
    return true;
  }
};
