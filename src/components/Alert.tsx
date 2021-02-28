import  { FC } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div>
      <div onClick={onClose}></div>
      <div className="alert-card">
        <header className="alert-header">
          <p className="alert-messgae">{message}</p>
        </header>
        <footer>
          <button className="button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Alert;
