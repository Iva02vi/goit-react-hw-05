import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRef } from "react";
import css from "./GoBackLink.module.css";

const GoBackLink = () => {
  const location = useLocation();

  const goBack = useRef(location.state ?? "/");

  return (
    <Link to={goBack.current} className={css.back}>
      <IoMdArrowRoundBack />
      <p>Go back</p>
    </Link>
  );
};

export default GoBackLink;
