const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div id="container">{children}</div>;
};

interface ContainerProps {
  children: React.ReactNode;
}

export default Container;
