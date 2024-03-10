class Contact {
    firstName;
    lastName;
    eMail;
    phone;

    constructor(firstName, lastName, eMail, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.phone = phone;
        console.log('New Contact created! ' + firstName + " " + lastName);
    }

    call() {
        window.location.href = 'tel:' + this.phone;
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}