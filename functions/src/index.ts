import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";

admin.initializeApp();

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const onMessageCreate = functions.database
  .ref("users/{arrayId}/userContactInformation")
  .onCreate((snapshot) => {
    const messageData = snapshot.val();
    const firstName = addPizzazz(messageData.firstName);
    return snapshot.ref.update({ firstName: firstName });
  });

function addPizzazz(firstName: string): string {
  return firstName.replace(/\bSteven\b/g, "Memphis");
}

export const welcomeEmail = functions.database
  .ref("users/{arrayId}")
  .onCreate((snapshot) => {
    const messageData = snapshot.val();
    const userEmail = messageData.userContactInformation.email;
    const userFirstName = messageData.userContactInformation.firstName;
    const msg = {
      to: userEmail,
      from: "info@waveimpactcapitalgroup.com",
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: "Thank You for Contacting Us for More Information.",
        name: userFirstName,
      },
    };
    return sgMail.send(msg);
  });
