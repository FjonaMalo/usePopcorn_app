import { useState } from "react";
import { ChildrenProps } from "../../types";

const ListBox = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ListBox;
