import "./Window.css";

export default function Window({ title, children, step }) {
  return (
    <div className="window">

      <div className="window-header">

        <div className="window-title">
          {title}

          {step && (
            <span className="step-badge">
              {step}
            </span>
          )}
        </div>

        <div className="window-controls">
          <span></span>
          <span></span>
          <span className="close-btn"></span>
        </div>

      </div>

      <div className="window-body">
        {children}
      </div>

    </div>
  );
}
