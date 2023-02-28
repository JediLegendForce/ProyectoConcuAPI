class Employee{

    constructor(username, first_name, last_name, ID ){
        this.username =username;
        this.first_name=first_name;
        this.last_name=last_name;
        this.ID=ID;
    }

    getUsername(){
        return this.username;
    }

}

export {Employee};