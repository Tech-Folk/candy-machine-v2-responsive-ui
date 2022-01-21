import "./MntFoot.css"
import Discord from "./footer_icons/Discordicon.svg"
import Twitter from "./footer_icons/Twittericon.svg"


function MntFoot() {
  return (
       <ftbar>

          <a href="https://twitter.com/techfolk_nft" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>
            <center>
              <img src={Twitter} alt = "Twitter Logo" />
              <text style={{color: '#4A90E2', textDecoration: 'none' }}> Twitter</text>
            </center>
          </a>
          <a href="https://discord.gg/Ut72g67DNS" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', marginLeft: 150 }}>
            <center>
              <img src={Discord} alt = "Discord Logo" />
              <text style={{color: '#444EF2', textDecoration: 'none' }}> Discord</text>
            </center>
          </a>
       </ftbar>
  )
}

export default MntFoot;
