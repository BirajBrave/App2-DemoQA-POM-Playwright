import{test, expect} from '@playwright/test';
import { WebTablesPage } from '../pages/WebTablesPage';

test("Elements Web Tables", async({page})=>{

    const webTablePage = new WebTablesPage(page);

    await page.goto("https://demoqa.com/");

    await webTablePage.clickElements();
    await expect(page).toHaveURL("https://demoqa.com/elements");

    await webTablePage.clickWebTable();
    await expect(page).toHaveURL("https://demoqa.com/webtables");

    await webTablePage.clickAdd();
    await expect(page.getByRole("dialog")).toBeVisible();

    await webTablePage.fillRegistrationForm("Binu", "Das", "das@gmail.com", "22", "190000", "QA");

    await webTablePage.submitRecord();

    
    //Find/validate a record
    const row = await webTablePage.findRecord("das@gmail.com");

    await expect(row).toContainText("Binu");
    await expect(row).toContainText("Das");
    await expect(row).toContainText("das@gmail.com");
    await expect(row).toContainText("22");
    await expect(row).toContainText("190000");
    await expect(row).toContainText("QA");

    await webTablePage.userBinuRemove();

    const removeBinu = await webTablePage.findRecord("das@gmail.com");
    await expect(removeBinu).not.toBeVisible();

    await webTablePage.getTable();
    await webTablePage.userEdit();
    await webTablePage.userDelete();
    

});



