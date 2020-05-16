const UUID = require('uuid');

class Wallet {        //class 关键字  面向对象
    constructor(){
        this._id = UUID.v1().replace(/-/g,''); //_变量  私有
        this._createTime = + new Date();

        this._balance = 0;
        
        // console.log(this.id);
       
    }
    increaseBalance(increasedAmount){
        console.log('多了' + increasedAmount);
        this._balance += increasedAmount;

    }
    decreaseBalance(decreasedAmount){
        this._balance -= decreasedAmount;
    }
    getBalance(){
        return this._balance;
    }
    // setBalance(){
        
    // }
    getCreateTime(){  //public
        return this._createTime;
    }
    
    getId(){
        return this._id;
    }
    setId(){
        throw new Error ('私有属性_id 不可以修改');
    }
}

const zzwWallet = new Wallet();     //实例化
console.log(zzwWallet.getId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance().toFixed(2));
// console.log(zzwWallet.getId());
// zzwWallet._id = '12212';
// console.log(zzwWallet.id);
