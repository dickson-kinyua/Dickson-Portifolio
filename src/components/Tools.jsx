export const Tools = () => {
  return (
    <div className="mt-32 flex flex-col gap-4">
      <div>
        <h3 className="text-3xl font-bold text-orange-800">
          Tools and Software
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5 md:grid-cols-8 md:gap-8">
        <div>
          <img className="w-full h-15" src="vscode.png" alt="" />
          <p className="text-center">VS Code</p>
        </div>
        <div>
          <img className="w-full h-15" src="chatgpt.jpg" alt="" />
          <p className="text-center">ChatGPT</p>
        </div>
        <div>
          <img className="w-full h-15" src="chrome.jpg" alt="" />
          <p className="text-center">Chrome</p>
        </div>
        <div>
          <img className="w-full h-15" src="mongoCompass.png" alt="" />
          <p className="text-center">MongoDb Compass</p>
        </div>
        <div>
          <img className="w-full h-15" src="postman.JPG" alt="" />
          <p className="text-center">Postman</p>
        </div>
      </div>
    </div>
  );
};
