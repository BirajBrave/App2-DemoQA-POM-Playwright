import{ Page } from '@playwright/test';

export class WebTablesPage{

    private elements;
    private webTablesLink;
    private addButton;

    private firstName;
    private lastName;
    private email;
    private age;
    private salary;
    private department;

    private submitButton;

    private deletBinuRow;

    private table;
    private editButton;
    private deleteButton;

    



    constructor(private page: Page){
        this.elements = this.page.getByRole("link", {name: "Elements"});
        this.webTablesLink = this.page.getByRole("link", {name: "Web Tables"});
        this.addButton = this.page.getByRole("button", {name: "Add"});

        this.firstName = this.page.getByPlaceholder("First Name");
        this.lastName = this.page.getByPlaceholder("Last Name");
        this.email = this.page.getByPlaceholder("name@example.com");
        this.age = this.page.getByPlaceholder("Age");
        this.salary = this.page.getByPlaceholder("Salary");
        this.department = this.page.getByPlaceholder("Department");

        this.submitButton = this.page.getByRole("button", {name: "Submit"});

        this.deletBinuRow = this.page.locator('#delete-record-4');

        this.table = this.page.getByRole("table");
        this.editButton = this.page.locator('#edit-record-1');
        this.deleteButton = this.page.locator('#delete-record-2');

        
        
    }

    async clickElements(){
       await this.elements.click();
    }

    async clickWebTable(){
       await this.webTablesLink.click();

    }

    async clickAdd(){
        await this.addButton.click();
    }

    async fillRegistrationForm(firstNameValue: string, 
                  lastNameValue: string,
                  emailValue: string, 
                  ageValue: string, 
                  salaryValue: string, 
                  departmentValue: string){
        await this.firstName.fill(firstNameValue);
        await this.lastName.fill(lastNameValue);
        await this.email.fill(emailValue);
        await this.age.fill(ageValue);
        await this.salary.fill(salaryValue);
        await this.department.fill(departmentValue);   
    }

    async submitRecord(){
        await this.submitButton.click();
    }

    //Find/validate a record
    async findRecord(rowUserEmailValue: string){
        const row = this.page.getByRole("row").filter({hasText: rowUserEmailValue});

        return row;
    }

    async userBinuRemove(){
        await this.deletBinuRow.click({force: true});
    }


    async getTable() {
    return this.table;
    }

    async userEdit(){
        await this.editButton.click();
    }

    async userDelete(){
        await this.deleteButton.click({force: true});
    }

  
}