import { FunctionalComponent, h } from 'preact';
import Footer from './Footer.tsx';

interface Props {
  role: "athlete" | "judge" | "admin";
}

const PageWrapper: FunctionalComponent<Props> = ({ role, children }) => {
  return (
    <div className="px-4 py-8 mx-auto bg-white">
      <div className="max-w-screen-md mx-auto">
        {children}
        <div style={{ height: '60px' }}></div> {/* Spacer */}
        <Footer role={role} />
      </div>
    </div>
  );
};

export default PageWrapper;
