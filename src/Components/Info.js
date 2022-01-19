import "./Info.css"

const Info = ({itemsAvailable, itemsRedeemed, price, balance}) => {
  return (
  
    <ipage>
      <container>
              <subfont>Mint info</subfont>
              <pfont style = {{marginTop : 30}}>Cost of each Tech Folk Nft </pfont>
              <dfont>{price}</dfont>
              <pfont>Folks still available to mint</pfont>
              <dfont>{itemsAvailable}</dfont>
              <pfont>Total count you have purchased</pfont>
              <dfont>{itemsRedeemed}</dfont>
              <pfont>Total balance of Sol in your wallet</pfont>
              <dfont>{balance}</dfont>
      </container>
    </ipage>
  

  );
};

export default Info;

