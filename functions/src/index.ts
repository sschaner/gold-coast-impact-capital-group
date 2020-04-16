import * as functions from "firebase-functions";

export const onMessageCreate = functions.database
  .ref("users/{arrayId}/userContactInformation")
  .onCreate((snapshot, context) => {
    const arrayId = context.params.arrayId;
    console.log(`The array element of this user is ${arrayId}`);

    const messageData = snapshot.val();
    console.log(messageData.firstName);
    const firstName = addPizzazz(messageData.firstName);
    return snapshot.ref.update({ firstName: firstName });
  });

function addPizzazz(firstName: string): string {
  return firstName.replace(/\bSteven\b/g, "Memphis");
}
