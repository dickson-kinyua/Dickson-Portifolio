export const Skills = () => {
  return (
    <div id="skills" className="mt-32 flex flex-col gap-14">
      <div className="flex flex-col items-center bg-gray-200 py-10">
        <h3 className="text-3xl text-gray-700">Skills</h3>
      </div>
      <div className="grid grid-cols-3 gap-5 md:grid-cols-8 md:gap-8">
        <div>
          <img className="w-full h-15" src="html_imge.JPG" alt="" />
          <p className="text-center">HTML 5</p>
        </div>
        <div>
          <img className="w-full h-15" src="css_image.JPG" alt="" />
          <p className="text-center">CSS 3</p>
        </div>
        <div>
          <img className="w-full h-15" src="js_image.JPG" alt="" />
          <p className="text-center">Javascript</p>
        </div>
        <div>
          <img className="w-full h-15" src="tw_css.png" alt="" />
          <p className="text-center">Tailwindcss</p>
        </div>
        <div>
          <img className="w-full h-15" src="react_js.JPG" alt="" />
          <p className="text-center">React JS</p>
        </div>
        <div>
          <img className="w-full h-15" src="node.JPG" alt="" />
          <p className="text-center">Node JS</p>
        </div>
        <div>
          <img className="w-full h-15" src="express.JPG" alt="" />
          <p className="text-center">Express</p>
        </div>
        <div>
          <img className="w-full h-15" src="mongoDB.JPG" alt="" />
          <p className="text-center">MongoDB</p>
        </div>
        <div>
          <img className="w-full h-15" src="mongoose.png" alt="" />
          <p className="text-center">Mongoose</p>
        </div>
        <div>
          <img className="w-full h-15" src="git.png" alt="" />
          <p className="text-center">Git</p>
        </div>
        <div>
          <img className="w-full h-15" src="github.png" alt="" />
          <p className="text-center">Github</p>
        </div>
      </div>
    </div>
  );
};
