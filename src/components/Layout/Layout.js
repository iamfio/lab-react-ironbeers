import Header from '../header/Header';

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
        <div className="d-flex align-items-center justify-content-center"></div>
        <div className="">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}
