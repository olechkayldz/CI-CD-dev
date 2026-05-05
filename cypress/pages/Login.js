class Login {

navigate() {
    cy.visit(" https://www.edu.goit.global/account/login");
}
get emailİnput() {
    return cy.get('#user_email');
}
get passwordİnput() {
    return cy.get('#user_password');
}
get LoginButton(){
   return cy.get('.next-1jphuq5');
}
LoginYap(email,sifre) {
    this.emailİnput.type(email);
    this.passwordİnput.type(sifre);
    this.LoginButton.click();
}
}
export default new Login();




