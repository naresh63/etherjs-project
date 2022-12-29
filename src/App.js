import React,{useState} from 'react'
import './App.css';
import { ethers } from "ethers";



function App() {
  const [enterAddr, setEnterAddr] = useState("");
  const [block, setBlock] = useState("");
  const [accBal, setAccBal] = useState("");
  const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/448893adf466452f8119284681c3a026`);

  const querryBlockchain = async ()=>{
    const currBlock = await provider.getBlockNumber();
    setBlock(currBlock);
     const balance = await provider.getBalance(enterAddr);
     const balInEther = ethers.utils.formatEther(balance)
     setAccBal(balInEther);
   }

  return (
    <div className="App">
     <h1> Check ether balance of any ethereum address</h1>
     <input className='inp-addr' type="text" value={enterAddr} onChange={(e)=>setEnterAddr(e.target.value)} placeholder="enter address/ENS"/>
      <button className='search-addr-btn' onClick={()=>querryBlockchain()}> search</button>
      <p> e.g. 0x8ba1f109551bD432803012645Ac136ddd64DBA72</p>
      <h3> latest block : <span className='block-value'> {block}</span> </h3>
      {
        accBal  &&   <h3> balance for given address <span className='addr-value'>  {enterAddr}</span> is : <span className='bal-value'> {accBal} </span> Ether</h3>   
      }
    </div>
  );
}

export default App;
