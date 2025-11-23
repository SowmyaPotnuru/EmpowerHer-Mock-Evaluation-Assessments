function createWallet(){
  let money = 0;
  function addMoney(x){
    money += x;
    console.log(`The amount after adding ${x} is ${money}`);
  }
  function checkBalance(x){
    console.log(`The remaining balance in wallet is ${money}`);
  }
  return {addMoney, checkBalance};
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
