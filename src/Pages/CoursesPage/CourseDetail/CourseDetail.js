import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useLocation } from "react-router-dom";
import { DataContext } from '../Context/Context'
import styles from './CourseDetail.module.css'
import course from '../../../Assets/Images/course__detail.jpg'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { convertShortName } from '../../../Extensions/convertShortName';

function CourseDetail() {
  const { data } = useContext(DataContext)
  let routerLink = convertShortName(useLocation().pathname.replace("/khoa-hoc/", ''))
  console.log(routerLink)
  return (
    <div className={styles.main}>
      <ul className={styles.list}>
        {/* <li className={styles.item}>
          <img src={course} alt="" className={styles.item__img} />
          <h3 className={styles.item__title}>
            Đường về xứ phật
          </h3>
          <div className={styles.info}>
            <p className={styles.info__content}>
              <PersonIcon className={styles.info__icon} /> Vũ Đức Sỹ
            </p>
            <p className={styles.info__content}>
              <AccessTimeIcon className={styles.info__icon} /> 24 giờ 36 phút
            </p>
            <p className={styles.info__content}>
              <PersonOutlineIcon className={styles.info__icon} /> 220 Học viên
            </p>
          </div>
          <Link className={styles.item__join}>
            Tham gia
          </Link>
        </li> */}
        {
          routerLink ? data.filter((item) => item.department === routerLink).map(
            (val, index) =>
              <li key={index} className={styles.item}>
                <img src={course} alt="" className={styles.item__img} />
                <h3 className={styles.item__title}>
                  {val.name}
                </h3>
                <div className={styles.info}>
                  <p className={styles.info__content}>
                    <PersonIcon className={styles.info__icon} /> Vũ Đức Sỹ
                  </p>
                  <p className={styles.info__content}>
                    <AccessTimeIcon className={styles.info__icon} /> {Math.floor(val.total_time)} giờ {Math.floor((val.total_time % 1) * 60)} phút
                  </p>
                  <p className={styles.info__content}>
                    <PersonOutlineIcon className={styles.info__icon} /> 220 Học viên
                  </p>
                </div>
                <Link className={styles.item__join}>
                  Tham gia
                </Link>
              </li>
          ) : data.map(
            (val, index) =>
              <li key={index} className={styles.item}>
                <img src={course} alt="" className={styles.item__img} />
                <h3 className={styles.item__title}>
                  {val.name}
                </h3>
                <div className={styles.info}>
                  <p className={styles.info__content}>
                    <PersonIcon className={styles.info__icon} /> Vũ Đức Sỹ
                  </p>
                  <p className={styles.info__content}>
                    <AccessTimeIcon className={styles.info__icon} /> {Math.floor(val.total_time)} giờ {Math.floor((val.total_time % 1) * 60)} phút
                  </p>
                  <p className={styles.info__content}>
                    <PersonOutlineIcon className={styles.info__icon} /> 220 Học viên
                  </p>
                </div>
                <Link className={styles.item__join}>
                  Tham gia
                </Link>
              </li>
          )
        }
      </ul>
    </div>
  )
}

export default CourseDetail