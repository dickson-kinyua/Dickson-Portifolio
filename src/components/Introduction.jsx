export const Introduction = () => {
  return (
    <div className="flex flex-row justify-between mt-36 h-4/5 p-5 ">
      <div className="grow ">
        <div>
          <p className="text-6xl font-bold">Hi,I am Dickson</p>
        </div>
        <div>
          <p className="text-2xl font-bold mt-4">
            I develop FullStack Web Applications using
          </p>
          <p className="text-2xl font-bold ">MERN Stack</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col grow items-end gap-16 font-semibold text-xl">
        <div className="flex flex-col items-end ">
          <p>1+</p>
          <p>Years of experience</p>
        </div>
        <div className="flex flex-col items-end ">
          <p>100%</p>
          <p>Success Rate</p>
        </div>
        <div className="flex flex-col items-end ">
          <p>20</p>
          <p>Projects Done</p>
        </div>
      </div>
    </div>
  );
};
