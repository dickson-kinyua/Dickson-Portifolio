export const Contact = () => {
  return (
    <div className="mt-10 bg-gray-100">
      <h4 className="mb-5 text-orange-800">Get In Touch</h4>
      <form className="flex flex-col ">
        <label id="name">Your name :</label>
        <input className="border-b-2 border-gray-900" type="text" id="name" />
        <label id="email">Your Email Address :</label>
        <input className="border-b-2 border-gray-900" type="email" id="email" />
        <label id="message">Leave me a message</label>
        <textarea
          className="border-b-2 border-gray-900"
          id="message"
        ></textarea>
        <button className="bg-orange-800 mt-8 text-white" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};
