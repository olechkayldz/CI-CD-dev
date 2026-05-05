import HomePage from "../../pages/HomePage";
import Login from "../../pages/Login";


describe("login olma", function() {

    it("kullanici girisi1", function(){

   Login.navigate();
   Login.LoginYap("user888@gmail.com","1234567890")
    })


      it("kullanici girisi2", function(){

  Login.navigate();
    Login.LoginYap("testowyqa@qa.team","QA!automation-1");

    HomePage.cikisYap();

    });
});