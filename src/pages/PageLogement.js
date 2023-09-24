import Header from "../components/Header";
import datas from "../datas/datas";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Page404 from "./Page404";
import MainLogement from "../components/MainLogement";

const PageLogement = () => {
  const { id } = useParams();
  const dataFiltered = datas.filter((data) => data.id === id)[0];
  return (
    <>
      {dataFiltered ? (
        <div className="logement-container">
          <Header />
          <MainLogement dataFiltered={dataFiltered}/>
            <Footer />
        </div>
      ) : (
        <Page404 />
      )}
    </>
  );
};

export default PageLogement;
