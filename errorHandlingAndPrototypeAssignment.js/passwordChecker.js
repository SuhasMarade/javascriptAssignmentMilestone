class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    getPassword(){
        let len = this.password.length;
        let str = "";
        for(let i = 0; i < len; i++){
            str += "*";
        }
        return str;
    }
    setPassword(password){
        let rE1 = /[A-Z]+/;
        let rE2 = /(\w|\.){8,}/;
        let rE3 = /[0-9]/;

        let result1 = rE1.test(password);
        let result2 = rE2.test(password);
        let result3 = rE3.test(password);

        let result = (result1 && result2 && result3);

        if(result){
            this.password = password;
        }
        else{
            throw new Error("Error: Password must be at least 8 characters long and contian at least one number and one uppercase letter")
        }
        
    }
}
try{
    const user = new User("Mithun", "Password123");
    console.log(user.getPassword());
    user.setPassword("MyPassword123");
}
catch(err){
    console.log(err.message);
}
