import Home from "../../Home";
import "./NavMint.css";
import styled from "styled-components";
import techfolk_logotype from "./techfolk_logotype.svg"
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";


const ConnectButton = styled(WalletMultiButton)`
`;


const NavMint = () => {
    return (
        <navbar >
            <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer"><img src={techfolk_logotype} alt = "Techfolk Logo" /></a>
            <ConnectButton>Connect</ConnectButton>
        </navbar>
    )
}

export default NavMint
