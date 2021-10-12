
export class UserModel{
    fname:string = "";
    lname:string = "";
    email:string = "";
    country:string = "";
    userInfo:string = "";
    inIndia:boolean = true;
    
    OnInit(fname:string="",lname:string="",email:string="",country:string="India",userInfo:string="",inIndia:boolean=true){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.country = country;
        this.userInfo = userInfo;
        this.inIndia = inIndia;
    }

    constructor(fname:string="",lname:string="",email:string="",country:string="India",userInfo:string="",inIndia:boolean=true,model?:any){
        this.OnInit(fname,lname,email,country,userInfo,inIndia);
        if(model) this.ByModel(model);
    }

    ByModel(model?:UserModel){
        this.OnInit(model?.fname,model?.lname,model?.email,model?.country,model?.userInfo,model?.inIndia);
        return this;
    }

}