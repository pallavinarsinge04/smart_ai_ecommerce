
import transporter from "../config/mail.js";

export const sendOrderMail=async(email,name)=>{

await transporter.sendMail({

from:process.env.EMAIL_USER,

to:email,

subject:"Order Confirmation",

html:`

<h2>Hello ${name}</h2>

<p>Your order has been placed successfully.</p>

`

});

};
