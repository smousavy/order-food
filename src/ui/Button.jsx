import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-base rounded-sm bg-theme-400 font-semibold uppercase tracking-wide text-theme-100 transition-colors duration-300 hover:bg-theme-1000 focus:bg-theme-1000 focus:outline-none focus:ring focus:ring-theme-1000 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-base rounded-sm border-2 border-theme-200 font-semibold uppercase tracking-wide text-theme-500 transition-colors duration-300 hover:bg-theme-100 hover:text-theme-800 focus:bg-theme-100 focus:text-theme-800 focus:outline-none focus:ring focus:ring-theme-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
