/**
 * @type {import('@types/aws-lambda').PreSignUpTriggerHandler}
 */
exports.handler = async (event) => {
  // allowed emails
  const allowedDomainList = process.env.DOMAINALLOWLIST;

  // Split the email address so we can compare domains
  const address = event.request.userAttributes.email.split("@");

  // Check if the provided email is in the allowed list
  const isAllowed = allowedDomainList.includes(address[1]);

  // Return a response based on whether the email is allowed or not
  if (isAllowed) {
      return {
          allowSignup: true
      };
  } else {
      throw new Error('Email not allowed for signup');
  }

};
