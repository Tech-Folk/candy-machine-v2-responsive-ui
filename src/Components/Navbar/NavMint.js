import "./NavMint.css";
import techfolk_logotype from "./techfolk_logotype.svg"



const NavMint = ({ConnectButton, WalletContainer, Wallet, wallet, WalletAmount, balance}) => {
    return (
        <navbar >
            <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer"><img src={techfolk_logotype} alt = "Techfolk Logo" /></a>
            <WalletContainer>
                <Wallet>
                    {wallet ?
                        <WalletAmount>{(balance || 0).toLocaleString()} SOL<ConnectButton/></WalletAmount> :
                        <ConnectButton>Connect Wallet</ConnectButton>}
                </Wallet>
            </WalletContainer>
        </navbar>
    )
}

export default NavMint
