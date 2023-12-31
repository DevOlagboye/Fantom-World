import { useState } from "react"
import "./Components/NavBar/NavBar.css"
import "./Components/HeroPage/HeroPage.css"
import "./Components/Partners/Partners.css"
import "./Components/HomeCard/HomesCard.module.css"
import "./Components/SuperDrops/SuperDrops.css"
import "./Components/LiveAuction/LiveAuction.css"
import "./Components/Creators/Creators.css"
import "./Components/SellNft/SellNft.css"
import "./Components/Cta/Cta.css"
import "./Components/Footer/Footer.css"
// import "./Components/CreatorPage/CreatorPage.css"
import "./Components/CreatorPage/CreatorPage.css"
import "./Components/CreatorCollection/CreatorCollection.css"
import "./Components/CreatorHomes/CreatorHomes.css"
import "./page/CreateNFT.css"
import "./App.css"
import "../styles/globals.css"

import "@rainbow-me/rainbowkit/styles.css"
import {
    getDefaultWallets,
    RainbowKitProvider,
    connectorsForWallets,
    darkTheme,
    midnightTheme,
} from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi"
import { goerli, optimismGoerli, fantomTestnet, fantom } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import HookProvider from "../context/Hook"
import { ThemeProvider, createTheme } from "@mui/material"
import { Analytics } from "@vercel/analytics/react"

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [fantom],
    [
        alchemyProvider({ apiKey: "PrdHvDC9SU7_y9GyCH3tG734SOMbwAkj" }),
        publicProvider(),
    ]
)
const { connectors } = getDefaultWallets({
    appName: "FantomWorld",
    projectId: "1694a591eac2ab285be5adbbfff34913",
    chains,
})
// const connectors = connectorsForWallets([
//     {
//         groupName: "Other",
//         wallets: [
//             argentWallet({ chains }),
//             trustWallet({ chains }),
//             omniWallet({ chains }),
//             imTokenWallet({ chains }),
//             ledgerWallet({ chains }),
//         ],
//     },
// ])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
})

const dark = createTheme({
    palette: {
        mode: "dark",
    },
})

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={dark}>
            <WagmiConfig config={wagmiConfig}>
                <HookProvider>
                    <RainbowKitProvider
                        theme={darkTheme()}
                        modalSize="compact"
                        chains={chains}
                    >
                        <Component {...pageProps} /> <Analytics />
                    </RainbowKitProvider>{" "}
                </HookProvider>
            </WagmiConfig>
        </ThemeProvider>
    )
}

export default MyApp
