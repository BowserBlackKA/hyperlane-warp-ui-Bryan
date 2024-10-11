import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [],
  options: {},
};

export const warpRoutes = [
  {
    cchainName: "arbitrum",
    standard: "EvmHypCollateral",
    decimals: 18,
    symbol: "WETH",
    name: "Wrapped Ether",
    logoURI: "/Users/bryankaufmann/hyperlane-warp-ui-Bryan/public/logos/weth.png",
    addressOrDenom: "0x2dBFfbc5447A372DfD278704541652DA010498c1",
    collateralAddress: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    connections: [
      { token: "ethereum|base|0x2dBFfbc5447A372DfD278704541652DA010498c1" }
    ]
  },
  {
    chainName: "base",
    standard: "EvmHypSynthetic",
    decimals: 18,
    symbol: "WETH",
    name: "Wrapped Ether",
    logoURI: "/Users/bryankaufmann/hyperlane-warp-ui-Bryan/public/logos/weth.png",
    addressOrDenom: "0x2dBFfbc5447A372DfD278704541652DA010498c1",
    connections: [
      { token: "ethereum|arbitrum|0x2dBFfbc5447A372DfD278704541652DA010498c1" }
    ]
  }
];
