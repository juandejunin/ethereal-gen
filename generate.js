const nodemailer = require('nodemailer');

async function createAccount() {
  const testAccount = await nodemailer.createTestAccount();

  console.log('\n✅ Cuenta Ethereal generada:\n');
  console.log(`ETHEREAL_USER=${testAccount.user}`);
  console.log(`ETHEREAL_PASS=${testAccount.pass}`);
  console.log(`\n🔗 Podés usar estos datos en tu .env o en EmailService\n`);
}

createAccount().catch(console.error);
