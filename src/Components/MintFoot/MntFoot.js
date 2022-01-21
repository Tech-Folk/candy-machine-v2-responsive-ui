import "./MntFoot.css"
import Discord from "./footer_icons/Discordicon.svg"
import Twitter from "./footer_icons/Twittericon.svg"


function MntFoot() {
  return (
       <ftbar>
          <a href="https://twitter.com/techfolk_nft" target="_blank" rel="noopener noreferrer" style={{color: '#4A90E2', textDecoration: 'none' }}><img src={Twitter} alt = "Twitter Logo" /> Twitter</a>
          <a href="https://discord.gg/Ut72g67DNS" target="_blank" rel="noopener noreferrer" style={{color: '#444EF2' , textDecoration: 'none', marginLeft: 150 }}><img src={Discord} alt = "Discord Icon" /> Discord</a>
       </ftbar>
  )
}

export default MntFoot;
