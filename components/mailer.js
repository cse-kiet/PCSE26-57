import emailjs from "@emailjs/browser";

console.log("1", process.env.NEXT_PUBLIC_USER_ID);
console.log("2", process.env.NEXT_PUBLIC_SERVICE_ID);
console.log("3", process.env.NEXT_PUBLIC_TEMPLATE_ID);

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { name, email, message },
    process.env.NEXT_PUBLIC_USER_ID // Directly pass the public key here
  );
};

export default mail;
