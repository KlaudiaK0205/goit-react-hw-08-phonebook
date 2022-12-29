import { Link } from "react-router-dom";
import style from 'components/App.module.css';

export const WelcomePage = () => {

    return (
      <div className={style.container}>
          <div className={style.wrapper}>
        {}
        Welcome to Phonebook. <br></br><br></br>
        If you already have an account just <Link to="/login" className={style.link}>LOG IN</Link> <br></br>
        If you don't have an account <Link to="/register" className={style.link}> SIGN IN </Link>
    </div>  
      </div>
  );
};