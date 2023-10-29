import "./Pages.scss";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { components } from "features";
import { isSecondLevelDomain } from "shared/utils";

const Landing = lazy(() => import("./Landing"));
const Page404 = lazy(() => import("./Page404"));
const Registration = lazy(() => import("./Registration"));
const CreateNewOrg = lazy(() => import("./CreateNewOrg"));

const Login = lazy(() => import("./Login"));
const Exit = lazy(() => import("./Exit"));

const Integration = lazy(() => import("./Integration"));
const Pricing = lazy(() => import("./Pricing"));
const Reviews = lazy(() => import("./Reviews"));
const Support = lazy(() => import("./Support"));
const Pay = lazy(() => import("./Pay"));

const Company = lazy(() => import("./Company"));
const Training = lazy(() => import("./Training"));
const Tests = lazy(() => import("./Tests"));
const Results = lazy(() => import("./Results"));
const Appeals = lazy(() => import("./Appeals"));
const Applications = lazy(() => import("./Applitations"));
const Materials = lazy(() => import("./Materials"));
const TestsBase = lazy(() => import("./TestsBase"));
const Staff = lazy(() => import("./Staff"));
const Analitics = lazy(() => import("./Analitics"));
const Settings = lazy(() => import("./Settings"));
const Test = lazy(() => import("./Test"));
const Train = lazy(() => import("./Train"));

const Loading = components.Loading;
const Header = components.Header;
const Footer = components.Footer;
const Sidebar = components.Sidebar;

const Routing = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
          {isSecondLevelDomain(location.href) ? null : <Sidebar />}
        <div className="route-wrapper">
          <Routes>
            <Route
              path="/"
              element={<Loading children={<Landing />} />} // +
            />
            <Route path="/login" element={<Loading children={<Login />} />} />{" "}
            // +
            <Route path="/exit" element={<Loading children={<Exit />} />} /> //
            +
            <Route
              path="/pricing"
              element={<Loading children={<Pricing />} />}
            />{" "}
            // +
            <Route
              path="/reviews"
              element={<Loading children={<Reviews />} />}
            />{" "}
            // +
            <Route
              path="/support"
              element={<Loading children={<Support />} />}
            />{" "}
            // -
            <Route path="/pay" element={<Loading children={<Pay />} />} /> // -
            <Route
              path="/registration"
              element={<Loading children={<Registration />} />} // +
            />
            <Route
              path="/create"
              element={<Loading children={<CreateNewOrg />} />}
            />{" "}
            // +
            <Route
              path="/integration"
              element={<Loading children={<Integration />} />} // +
            />
            <Route
              path="/company"
              element={<Loading children={<Company />} />}
            />
            <Route
              path="/training"
              element={<Loading children={<Training />} />}
            />
            <Route
              path="/training/:id"
              element={<Loading children={<Train />} />}
            />
            <Route path="/tests" element={<Loading children={<Tests />} />} />
            <Route path="/tests/:id" element={<Loading children={<Test />} />} />
            <Route
              path="/results"
              element={<Loading children={<Results />} />}
            />
            <Route
              path="/appeals"
              element={<Loading children={<Appeals />} />}
            />
            <Route
              path="/applications"
              element={<Loading children={<Applications />} />}
            />
            <Route
              path="/materials"
              element={<Loading children={<Materials />} />}
            />
            <Route path="/staff" element={<Loading children={<Staff />} />} />
            <Route   
              path="/analytics"
              element={<Loading children={<Analitics />} />}
            />
            <Route
              path="/settings"
              element={<Loading children={<Settings />} />}
            />
            <Route
              path="/tests-base"
              element={<Loading children={<TestsBase />} />}
            />
            <Route path="/404" element={<Loading children={<Page404 />} />} />
            <Route path="*" element={<Navigate to={"/404"} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Routing;
