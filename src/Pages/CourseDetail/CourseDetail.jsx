import React, { useContext, useEffect, useState } from "react";
import styles from "./CourseDetail.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Introduce from "./Introduce/Introduce";
import Comment from "./Comment/Comment";
import Analyst from "./Analyst/Analyst";
import Share from "./Share/Share";
import LabList from "../Detail/LabList/LabList";
import { DataContext } from "../../Context/Context";

function CourseDetail() {
  const { data } = useContext(DataContext)
  const [content, setContent] = useState(1);
  const handleClick = (e) => {
    setContent(+e.target.dataset.content);

    document.querySelector('.' + styles.nav__item + '.' + styles.active).classList.remove(styles.active)
    e.target.parentElement.classList.add(styles.active)
  };
  const currCate = useLocation().hash.split('#')[1]
  const currLab = useLocation().hash.split('#')[2]
  const id = useLocation().search.replace('?', '')
  const linkVid = data[id]?.lesson[currCate].slides[currLab].url.replace("watch?v=", "embed/")
  return (
    <>
      <Header />
      <div className={`container ${styles.mainCourse}`}>
        <div className="row">
          <div className={`${styles.courseContent} col-md-8`}>
            <iframe
              src={linkVid}
              allowFullScreen
              className={styles.courseVideo}
            ></iframe>
            <ul className={styles.nav}>
              <li className={`${styles.nav__item} ${styles.active}`}>
                <p
                  onClick={handleClick}
                  data-content={1}
                  className={styles.nav__link}
                >
                  Giới thiệu
                </p>
              </li>
              <li className={styles.nav__item}>
                <p
                  onClick={handleClick}
                  data-content={2}
                  className={styles.nav__link}
                >
                  Bình luận
                </p>
              </li>
              <li className={styles.nav__item}>
                <p
                  onClick={handleClick}
                  data-content={3}
                  className={styles.nav__link}
                >
                  Thống kê
                </p>
              </li>
              <li className={styles.nav__item}>
                <p
                  to="/khoa-hoc/chi-tiet/lab"
                  onClick={handleClick}
                  data-content={4}
                  className={styles.nav__link}
                >
                  Chia sẻ
                </p>
              </li>
            </ul>
            <div className="container">
              <div className="row py-5">
                <div >
                  {content === 1 ?
                    <Introduce />
                    : content === 2 ?
                      <Comment />
                      : content === 3 ?
                        <Analyst />
                        :
                        <Share />
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4`}>
            <div className={`${styles.courseList}`}>
              <h2 className={`${styles.listTitle}`}>Nội dung khóa học</h2>
              <LabList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
