class Contact {
    firstName;
    lastName;
    eMail;

    constructor(firstName, lastName, eMail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        console.log('New Contact created! ' + firstName + " " + lastName);
    }
}