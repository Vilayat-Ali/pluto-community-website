export const Welcome = (new_member: String) => ({
  subject: `Welcome aboard, ${new_member}`,
  body: (
    <div>
      <p>Hello {new_member},</p>
      <p>You asked me to remind you about!</p>
      <p>See you!</p>
    </div>
  ),
});
