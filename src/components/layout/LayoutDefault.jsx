// this layout only for sign in page and sign up page

function LayoutDefault({ children }) {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden">{children}</main>
    </>
  );
}

export default LayoutDefault;
