import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div className="container mx-auto mt-10 mb-10 p-4">{children}</div>;
};

export default MainContainer;
