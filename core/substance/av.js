/* paste this line in verbatim */
window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };

/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/xeqvoggo",
  title: "Contact me",
  fields: [
    {
      type: "email",
      label: "E-mail:",
      name: "email",
      required: true,
      placeholder: "enter e-mail",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "enter message",
    },
    { type: "submit" },
  ],
  styles: {
    fontFamily: "Viaoda Libre",
    modal: {
      border: "1px solid grey",
      boxShadow: "6px 6px 0 grey",
      borderRadius: "4",
    },
    title: {
      background: "black",
      color: "white",
    },
    field: {
      display: "flex",
    },
    submitField: {
      justifyContent: "flex-end",
    },
    label: {
      width: "40%",
    },
    checkboxLabel: {
      width: "auto",
    },
    input: {
      borderRight: "1px solid rgba(0,0,0,0.1)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      borderRadius: "0px",
    },
    button: {
      background: "white",
      fill: "black",
      border: "1px solid #c6cbd1",
      boxShadow: "3px 3px 0px grey",
    },
    closeButton: {
      textShadow: "0 0 0 #231b1a",
    },
  },
  initiallyVisible: false,
});
