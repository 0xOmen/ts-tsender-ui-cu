"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync } from "wagmi/chains";

console.log(
  "WalletConnect Project ID:",
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
);

export default getDefaultConfig({
  appName: "TSender",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [zksync, anvil],
  ssr: false,
});
