
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, update, onValue } from "firebase/database";

const AdminPanel = () => {
    const auth = getAuth();
    // const database = getDatabase();
    const dbRef = ref(getDatabase());
    const db = getDatabase();

    const writeData =(input, item)=> {
      update(ref(db, 'presalecard'), {
        [item]: input,
      });
    }
   
    

    const presalecard_table = ref(db, 'presalecard');

    onValue(presalecard_table, (snapshot) => {
      const presalecard= snapshot.val();
      //console.log(presalecard);
    });
  
  return (
    
    <>
    <div>Admin Panel</div>
   
   

    <div>
      <input id='wallet_add_btn' type="text" placeholder='Wallet Address' />
      <button
      onClick={()=>{
        writeData(document.getElementById('wallet_add_btn').value, 'wallet_address')
        //alert("written")
      }}
      >Submit</button>
    </div>
    <div>
      <input id='rate' type="text" placeholder='Current Price' />
      <button
      onClick={()=>{
        writeData(document.getElementById('rate').value, 'current_price')
        alert("written")
      }}
      >Submit</button>
    </div>
    <div>
      <input id='total_presale' type="text" placeholder='Total Presale' />
      <button
      onClick={()=>{
        writeData(document.getElementById('total_presale').value, 'total_presale')
        alert("written")
      }}
      >Submit</button>
    </div>
    <div>
      <input id='phase' type="text" placeholder='Phase Completed' />
      <button
      onClick={()=>{
        writeData(document.getElementById('phase').value, 'phase_completed')
        alert("written")
      }}
      >Submit</button>
    </div>
    <div>
      <input id='amount_raised' type="text" placeholder='Amount Raised' />
      <button
      onClick={()=>{
        writeData(document.getElementById('amount_raised').value, 'amount_raised')
        alert("written")
      }}
      >Submit</button>
    </div>









    <button onClick={
        () => {
            signOut(auth).then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
        }
    }>Sign Out</button>
    </>
  )
}

export default AdminPanel;