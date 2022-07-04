const ContainerRoot: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen min-w-full w-full"
      id="container"
    >
      {children}
    </div>
  );
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="flex-1 max-w-screen-lg w-full mx-auto p-6">
      {children}
    </main>
  );
};

const Container = Object.assign(ContainerRoot, { Main });

interface ContainerProps {
  children: React.ReactNode;
}

interface MainProps {
  children: React.ReactNode;
}

export default Container;
