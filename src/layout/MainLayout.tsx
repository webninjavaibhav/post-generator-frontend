const MainLayout = ({ children }: {
  children: JSX.Element
}) => {
  return (
    <>
      <div className="p-4 h-[100dvh] w-full">{children}</div>
    </>
  );
};

export default MainLayout;
