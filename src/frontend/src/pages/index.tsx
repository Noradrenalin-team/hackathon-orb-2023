import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { components } from "features";

const Landing = lazy(() => import("./Landing"));
const Page404 = lazy(() => import("./Page404"));
const Integration = lazy(() => import("./Integration"));
const Login = lazy(() => import("./Login"));
const Registration = lazy(() => import("./Registration"));
const Reviews = lazy(() => import("./Reviews"));
const Pricing = lazy(() => import("./Pricing"));
const CreateNewOrg = lazy(() => import("./CreateNewOrg"));
const Support = lazy(() => import("./Support"));
const Pay = lazy(() => import("./Pay"));

const Loading = components.Loading;
const Header = components.Header;
const Footer = components.Footer;

const Routing = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
      
      <Routes>
        <Route
          path="/"
          element={<Loading children={<Landing />} />} // +
        />
        <Route path="/login" element={<Loading children={<Login />} />} /> // +
        <Route path="/pricing" element={<Loading children={<Pricing />} />} /> // +
        <Route path="/reviews" element={<Loading children={<Reviews />} />} /> // +
        <Route path="/support" element={<Loading children={<Support />} />} /> // -
        <Route path="/pay" element={<Loading children={<Pay />} />} /> // -
        <Route
          path="/registration"
          element={<Loading children={<Registration />} />} // +
        />
        <Route path="/create" element={<Loading children={<CreateNewOrg />} />} />
        <Route
          path="/integration"
          element={<Loading children={<Integration />} />} // +
        />
        <Route
          path="/company"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/training"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/tests"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/results"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/appeals"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/applications"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/materials"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/staff"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/analytics"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/settings"
          element={<Loading children={<Landing />} />}
        />
        <Route
          path="/tests-base"
          element={<Loading children={<Landing />} />}
        />
        <Route path="/404" element={<Loading children={<Page404 />} />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Routing;
