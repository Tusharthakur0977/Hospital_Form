import "./App.css";
import Background from "./assets/background.png";
import FIELDS from "./json/Fields";

function App() {
  return (
    <div className="main-container">
      <div className="split-container">
        <div
          className="image-container"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(to right, #ff5733, #ffc300), url(${Background})`,
          }}
        ></div>
        <div className="empty-box">
          <div
            style={{
              borderBottom: "1px solid black",
            }}
          >
            <img
              style={{
                alignSelf: "center",
                borderRadius: "10px",
              }}
              width={200}
              src="https://d2sn5i18drfi94.cloudfront.net/assets/images/header/Rainbow%20Logo.svg"
              alt="Your Image"
            />
          </div>

          <form
            style={{
              display: "flex",
              gap: 30,
              flexDirection: "column",
              padding: 20,
            }}
          >
            {FIELDS.map((field) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label for="total_bed_count">{field.label}</label>
                <input
                  style={{
                    borderRadius: 5,
                    padding: 10,
                    outline: "none",
                    border: "none",
                    backgroundColor: "#CDDCFD",
                  }}
                  type={field.inputType}
                  id={field.inputId}
                  name={field.inputName}
                  required={field.required}
                />
              </div>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label for="total_bed_count">Locality</label>
              <div style={{ display: "flex", gap: 10 }}>
                <div>
                  <input
                    type="radio"
                    id="urban"
                    name="locality"
                    value="Urban"
                    required
                  />
                  <label for="urban">Urban</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="rural"
                    name="locality"
                    value="Rural"
                    required
                  />
                  <label for="rural">Rural</label>
                </div>
              </div>
            </div>

            <button
              style={{
                padding: 15,
                background:
                  "linear-gradient(to right top, #006aff, #007aff, #0088ff, #0096ff, #00a2ff)",
                borderRadius: 10,
                outline: "none",
                border: "none",
                color: "white",
                width: "50%",
                alignSelf: "center",
              }}
              className="buttonn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
