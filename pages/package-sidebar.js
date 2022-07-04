import PackageSidebarPage from '../src/components/pages/packageSidebar/PackageSIdebar';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const PackageSidebar = () => {
  return (
    <>
      <Header />
      <PackageSidebarPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default PackageSidebar;
