import React from 'react';
import './Parts.css';

export function ChooseCustomer() {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div class="Auth-form-container">
                    <form class="Auth-form">
                        <div class="Auth-form-content">                
                            <button class="button" style="vertical-align:middle" formAction="/CreateCustomer"><span>Register an Individual</span></button><br>
                            <button class="button" style="vertical-align:middle" formAction="/CreateOrganization"><span>Register an Organization</span></button>     
                            <button class="backbutton" formAction="/Employee" type="submit" color=green><span>Back </span></button>                    
                        </div>
                    </form>
                </div>
            </body>
        </html>
    `;

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
