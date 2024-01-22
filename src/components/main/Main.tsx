import { ChildrenProps } from "../../types";

const Main = ({ children }: ChildrenProps) => {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  );
};

export default Main;
