/**
 * @type {import('@types/aws-lambda').PreSignUpTriggerHandler}
 */
exports.handler = async (event) => {
  // allowed emails
  const allowedEmails = process.env.DOMAINALLOWLIST;

  // Retrieve the email from the event
  const email = event.request.userAttributes.email;

  // Check if the provided email is in the allowed list
  const isAllowed = allowedEmails.includes(email);

  // Return a response based on whether the email is allowed or not
  if (isAllowed) {
      return {
          allowSignup: true
      };
  } else {
      throw new Error('Email not allowed for signup');
  }

};
