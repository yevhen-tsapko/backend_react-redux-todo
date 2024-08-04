const createVerificationToken = async () => {
  const { nanoid } = await import("nanoid");
  return nanoid();
};
module.exports = createVerificationToken;
